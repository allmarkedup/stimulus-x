import { getProperty } from "dot-prop";
import { application } from "./lifecycle";
import { reactive, shallowReactive, watch } from "./reactivity";
import { mutateDom } from "./mutation";
import { nextTick } from "./scheduler";
import { initTree } from "./lifecycle";
import { getOption } from "./options";

export function createReactiveControllerClass(ControllerClass) {
  return class extends ControllerClass {
    constructor(context) {
      super(context);

      // Override the attribute setter so that our mutation observer doesn't pick up on changes
      // that are also already being handled directly by Stimulus.
      const setData = this.data.set;
      this.data.set = (key, value) => {
        mutateDom(() => setData.call(this.data, key, value));
      };

      // Create a reactive controller object
      const trackDeep = getOption("trackDeep") || this.constructor.reactive === "deep";
      const reactiveSelf = trackDeep ? reactive(this) : shallowReactive(this);

      // Initialize watched property callbacks
      const watchedProps = this.constructor.watch || [];
      watchedProps.forEach((prop) => watchControllerProperty(reactiveSelf, prop));

      // Return the reactive controller instance
      return reactiveSelf;
    }

    connect() {
      // Initialize the DOM tree and run directives when connected
      super.connect();
      nextTick(() => initTree(this.element));
    }
  };
}

export function getClosestController(el, identifier) {
  const controllerElement = el.closest(`[data-controller~="${identifier}"]`);
  if (controllerElement) {
    return application.getControllerForElementAndIdentifier(controllerElement, identifier);
  }
}

export function evaluateControllerProperty(controller, property) {
  let value = getProperty(controller, property);
  if (typeof value === "function") {
    value = value.apply(controller);
  }
  return value;
}

export function watchControllerProperty(controller, propertyRef) {
  const getter = () => evaluateControllerProperty(controller, propertyRef);
  const cleanup = watch(getter, (value, oldValue) => {
    callCallbacks(controller, propertyRef, value, oldValue, false);
  });

  // Run once on creation
  callCallbacks(controller, propertyRef, getter(), undefined, true);

  const rootElement = controller.element;
  if (!rootElement.__stimulusX_cleanups) rootElement.__stimulusX_cleanups = [];
  rootElement.__stimulusX_cleanups.push(cleanup);
}

function callCallbacks(controller, propertyRef, value, oldValue, initial) {
  // Generic callback, called when _any_ watched property changes
  if (typeof controller.watchedPropertyChanged === "function") {
    controller.watchedPropertyChanged(propertyRef, value, oldValue, { initial });
  }

  // Property-specific change callback
  const propertyWatcherCallback =
    controller[`${getCamelizedPropertyRef(propertyRef)}PropertyChanged`];
  if (typeof propertyWatcherCallback === "function") {
    propertyWatcherCallback.call(controller, value, oldValue, { initial });
  }
}

function getCamelizedPropertyRef(propertyRef) {
  return camelCase(propertyRef.replace(".", " "));
}

function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
