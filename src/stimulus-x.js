import { reactive } from "./reactivity";
import { modifier } from "./modifiers";
import { directive } from "./directives";
import { queueJob, nextTick } from "./scheduler";
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

let markerCount = 1;

function extend(application) {
  // Override controller registration to insert a reactive subclass instead of the original
  application.register = function (identifier, ControllerClass) {
    const controllerConstructor = createReactiveControllerClass(ControllerClass);
    application.load({
      identifier,
      controllerConstructor,
    });
  };

  startObservingMutations();

  onElAdded((el) => initTree(el, application));
  onElRemoved((el) => destroyTree(el));

  onAttributesAdded((el, attrs) => {
    handleValueAttributes(el, attrs, application);
    directives(el, attrs).forEach((handle) => handle(application));
  });

  nextTick(() => {
    rootElements().forEach((el) => initTree(el, application));
  });
}

function createReactiveControllerClass(ControllerClass) {
  return class extends ControllerClass {
    constructor(context) {
      super(context);

      // Override the attribute setter so that our
      // mutation observer doesn't pick up on changes
      // that are already being handled directly by Stimulus.
      const setData = this.data.set;
      this.data.set = (key, value) => {
        mutateDom(() => setData.call(this.data, key, value));
      };

      // Return a reactive version of the controller instance
      return reactive(this);
    }
  };
}

function rootElements() {
  return Array.from(
    document.querySelectorAll("[data-controller]:not([data-controller] [data-controller])")
  );
}

function initTree(el, application) {
  deferHandlingDirectives(() => {
    walk(el, (el) => {
      if (el._stimulus_x_marker) return;

      directives(el, el.attributes).forEach((handle) => handle(application));

      el._stimulus_x_marker = markerCount++;
    });
  });
}

function destroyTree(root) {
  walk(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el._stimulus_x_marker;
  });
}

function walk(el, callback) {
  let skip = false;
  callback(el, () => (skip = true));
  if (skip) return;

  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}

// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function handleValueAttributes(el, attrs, application) {
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
    if (matches.length) {
      const identifier = matches[1];
      const valueName = matches[2];
      const controller = application.getControllerForElementAndIdentifier(el, identifier);

      mutateDom(() => {
        controller[`${valueName}Value`] = controller[`${valueName}Value`];
      });
    }
  }
}

export default { extend, modifier, directive };
