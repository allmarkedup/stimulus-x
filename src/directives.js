import { onAttributeRemoved } from "./mutation";
import { elementBoundEffect, isReactive } from "./reactivity";
import { applyModifiers, parseModifier } from "./modifiers";
import { getClosestController, evaluateControllerProperty } from "./controller";
import { getOption } from "./options";

let directiveHandlers = {};
let isDeferringHandlers = false;
let directiveHandlerStacks = new Map();
let currentHandlerStackKey = Symbol();

let attributePrefix = "data-bind-";

export function directive(name, callback) {
  directiveHandlers[name] = callback;
}

export function directiveExists(name) {
  return Object.keys(directiveHandlers).includes(name);
}

export function directives(el, attributes) {
  let directives = [];

  if (el.__stimulusX_directives) {
    directives = el.__stimulusX_directives;
  } else {
    directives = Array.from(attributes).filter(isDirectiveAttribute).map(toParsedDirectives);
    if (getOption("compileDirectives") === true) el.__stimulusX_directives = directives;
  }

  return directives
    .flat()
    .filter((d) => d)
    .map((directive) => getDirectiveHandler(el, directive));
}

export function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;

  let key = Symbol();

  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);

  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length) directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };

  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };

  callback(flushHandlers);
  stopDeferring();
}

export function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup = (callback) => cleanups.push(callback);
  let [effect, cleanupEffect] = elementBoundEffect(el);

  cleanups.push(cleanupEffect);

  let utilities = {
    effect,
    cleanup,
  };

  let doCleanup = () => {
    cleanups.forEach((i) => i());
  };

  return [utilities, doCleanup];
}

export function getDirectiveHandler(el, directive) {
  let handler = directiveHandlers[directive.type] || (() => {});
  let [utilities, cleanup] = getElementBoundUtilities(el);

  onAttributeRemoved(el, directive.attr, cleanup);

  let wrapperHandler = () => {
    let controller = getClosestController(el, directive.identifier);
    if (controller) {
      if (!isReactive(controller)) {
        console.warn(
          `StimulusX: Directive attached to non-reactive controller '${directive.identifier}'`,
          el
        );
        return;
      }
      handler = handler.bind(handler, el, directive, {
        ...utilities,
        evaluate: evaluator(controller),
        modify: applyModifiers,
      });
      isDeferringHandlers
        ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler)
        : handler();
    } else {
      console.error(`Controller '${directive.identifier}' not found`);
    }
  };

  return wrapperHandler;
}

function evaluator(controller) {
  return (property) => evaluateControllerProperty(controller, property);
}

function matchedAttributeRegex() {
  return new RegExp(`${attributePrefix}(${Object.keys(directiveHandlers).join("|")})$`);
}

function isDirectiveAttribute({ name }) {
  return matchedAttributeRegex().test(name);
}

function toParsedDirectives({ name, value }) {
  const type = name.match(matchedAttributeRegex())[1];
  const bindingExpressions = value
    .trim()
    .split(/\s+(?![^\(]*\))/) // split string on all spaces not contained in parentheses
    .filter((e) => e);

  return bindingExpressions.map((bindingExpression) => {
    const subjectMatch = bindingExpression.match(/^([a-zA-Z0-9\-_]+)~/);
    const subject = subjectMatch ? subjectMatch[1] : null;
    let valueExpression = subject
      ? bindingExpression.replace(`${subject}~`, "")
      : bindingExpression;

    let modifiers = valueExpression.match(/\:[^:\]]+(?=[^\]]*$)/g) || [];
    modifiers = modifiers.map((i) => i.replace(":", ""));

    valueExpression = valueExpression.split(":")[0];

    if (valueExpression[0] === "!") {
      valueExpression = valueExpression.slice(1);
      modifiers.push("not");
    }

    modifiers = modifiers.map((m) => parseModifier(m));

    const identifierMatch = valueExpression.match(/^([a-zA-Z0-9\-_]+)#/);
    if (!identifierMatch) {
      console.warn(`Invalid binding descriptor ${bindingExpression}`);
      return null;
    }

    const identifier = identifierMatch[1];
    let property = identifier ? valueExpression.replace(`${identifier}#`, "") : valueExpression;

    return {
      type,
      subject,
      modifiers,
      identifier,
      property,
      attr: name,
    };
  });
}
