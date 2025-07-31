import { nextTick } from "./scheduler";
import { createReactiveControllerClass } from "./controller";
import { walk } from "./utils";
import {
  startObservingMutations,
  onAttributesAdded,
  onElAdded,
  onElRemoved,
  cleanupAttributes,
  cleanupElement,
  mutateDom,
} from "./mutation";
import { deferHandlingDirectives, directives } from "./directives";

const defaultOptions = {
  optIn: false,
  compileDirectives: true,
};

let markerCount = 1;
let application = null;
let options = defaultOptions;

export function init(app, opts = {}) {
  options = Object.assign({}, defaultOptions, opts);
  application = app;

  const { optIn } = options;

  // Override controller registration to insert a reactive subclass instead of the original
  application.register = function (identifier, ControllerClass) {
    let controllerConstructor;
    if (optIn === false || ControllerClass.reactive === true) {
      controllerConstructor = createReactiveControllerClass(ControllerClass, application);
    } else {
      controllerConstructor = ControllerClass;
    }

    application.load({
      identifier,
      controllerConstructor,
    });
  };

  // Handle re-initializing reactive effects after Turbo morphing
  document.addEventListener("turbo:before-morph-element", beforeMorphElementCallback);
  document.addEventListener("turbo:morph-element", morphElementCallback);

  // start watching the dom for changes
  startObservingMutations();

  onElAdded((el) => {
    // Controller root elements init their own tree when connected so we can skip them.
    // if (el.hasAttribute("data-controller")) return;
    nextTick(() => initTree(el));
  });

  onElRemoved((el) => nextTick(() => destroyTree(el)));

  onAttributesAdded((el, attrs) => {
    handleValueAttributes(el, attrs);
    directives(el, attrs).forEach((handle) => handle());
  });
}

export function initTree(el) {
  deferHandlingDirectives(() => {
    walk(el, (el) => {
      if (el.__stimulusX_marker) return;

      directives(el, el.attributes).forEach((handle) => handle());

      el.__stimulusX_marker = markerCount++;
    });
  });
}

export function destroyTree(root) {
  walk(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el.__stimulusX_directives;
    delete el.__stimulusX_marker;
  });
}

export function beforeMorphElementCallback({ target, detail: { newElement } }) {
  if (!newElement && target.__stimulusX_marker) {
    return destroyTree(target);
  }
  delete target.__stimulusX_marker;
}

export function morphElementCallback({ target, detail: { newElement } }) {
  if (newElement) initTree(target);
}

// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function handleValueAttributes(el, attrs) {
  if (!el.hasAttribute("data-controller")) return;

  const controllerNames = el
    .getAttribute("data-controller")
    .trim()
    .split(" ")
    .filter((e) => e);

  const valueAttributeMatcher = new RegExp(
    `^data-(${controllerNames.join("|")})-([a-zA-Z0-9\-_]+)-value$`
  );

  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i];
    const matches = attr.name.match(valueAttributeMatcher);
    if (matches && matches.length) {
      const identifier = matches[1];
      const valueName = matches[2];
      const controller = application.getControllerForElementAndIdentifier(el, identifier);

      mutateDom(() => {
        controller[`${valueName}Value`] = controller[`${valueName}Value`];
      });
    }
  }
}

export { application, options };
