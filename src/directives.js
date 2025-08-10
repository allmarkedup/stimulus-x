import { onAttributeRemoved } from "./mutation";
import { elementBoundEffect, isReactive } from "./reactivity";
import { applyModifiers, parseModifier } from "./modifiers";
import { getClosestController, evaluateControllerProperty } from "./controller";
import { getOption } from "./options";

let directiveHandlers = {};
let isDeferringHandlers = false;
let directiveHandlerStacks = new Map();
let currentHandlerStackKey = Symbol();

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

  onAttributeRemoved(el, directive.originalAttribute.name, cleanup);

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
  const prefix = getOption("attributePrefix");
  return new RegExp(`${prefix}(${directiveNames().join("|")})$`);
}

function isDirectiveAttribute({ name }) {
  const prefix = getOption("shorthandAttributePrefix");
  return name.startsWith(prefix) || matchedAttributeRegex().test(name);
}

function directiveNames() {
  return Object.keys(directiveHandlers);
}

function toParsedDirectives(attr) {
  if (attr.name.startsWith(getOption("shorthandAttributePrefix"))) {
    return parseShorthandSyntaxAttributeDirectives(attr);
  } else {
    return parseStandardSyntaxAttributeDirectives(attr);
  }
}

function parseStandardSyntaxAttributeDirectives(originalAttribute) {
  const { name, value } = originalAttribute;
  const type = name.match(matchedAttributeRegex())[1];
  const expressions = value
    .trim()
    .split(/\s+(?![^\(]*\))/) // split string on all spaces not contained in parentheses
    .filter((e) => e);

  return expressions.map((expression) => {
    const attrMatch = expression.match(/^([a-zA-Z0-9\-_]+)~/);
    const attributeName = attrMatch ? attrMatch[1] : null;
    const bindingExpression = attributeName
      ? expression.replace(`${attributeName}~`, "")
      : expression;

    return {
      originalAttribute,
      attributeName,
      type,
      ...parseBindingValueExpression(bindingExpression),
    };
  });
}

function parseShorthandSyntaxAttributeDirectives(originalAttribute) {
  const { name, value } = originalAttribute;
  const prefix = getOption("shorthandAttributePrefix");
  const attributeName = name.replace(prefix, "");
  const type = directiveNames().includes(attributeName) ? attributeName : "attr";

  return [
    {
      originalAttribute,
      attributeName,
      type,
      ...parseBindingValueExpression(value),
    },
  ];
}

function parseBindingValueExpression(bindingExpression) {
  let [valueExpression, modifiersExpression = ""] = bindingExpression.trim().split(/\:(.*)/);
  const modifiers = modifiersExpression.match(/[^:\]]+(?=[^\]]*$)/g) || [];

  if (valueExpression[0] === "!") {
    // Shorthand `:not` modifier syntax
    valueExpression = valueExpression.slice(1);
    modifiers.push("not");
  }

  const identifierMatch = valueExpression.match(/^([a-zA-Z0-9\-_]+)#/);
  if (!identifierMatch) {
    console.warn(`Invalid binding descriptor ${bindingExpression}`);
    return null;
  }

  const identifier = identifierMatch[1];
  const property = identifier ? valueExpression.replace(`${identifier}#`, "") : valueExpression;

  return {
    identifier,
    property,
    modifiers: modifiers.map((m) => parseModifier(m)),
  };
}
