import { modifier } from "./modifiers";
import { directive } from "./directives";
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

const StimulusX = {};
let markerCount = 1;

StimulusX.extend = function (application) {
  this.application = application;

  // Override controller registration to insert a reactive subclass instead of the original
  application.register = function (identifier, ControllerClass) {
    const controllerConstructor = createReactiveControllerClass(ControllerClass, application);
    application.load({
      identifier,
      controllerConstructor,
    });
  };

  startObservingMutations();

  onElAdded((el) => initTree(el));
  onElRemoved((el) => destroyTree(el));

  onAttributesAdded((el, attrs) => {
    handleValueAttributes(el, attrs);
    directives(el, attrs).forEach((handle) => handle(StimulusX.application));
  });

  nextTick(() => {
    rootElements().forEach((el) => initTree(el));
  });
};

StimulusX.modifier = modifier;
StimulusX.directive = directive;

function rootElements() {
  return Array.from(
    document.querySelectorAll("[data-controller]:not([data-controller] [data-controller])")
  );
}

function initTree(el) {
  deferHandlingDirectives(() => {
    walk(el, (el) => {
      if (el.__stimulusX_marker) return;

      directives(el, el.attributes).forEach((handle) => handle(StimulusX.application));

      el.__stimulusX_marker = markerCount++;
    });
  });
}

function destroyTree(root) {
  walk(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el.__stimulusX_marker;
  });
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

export default StimulusX;
