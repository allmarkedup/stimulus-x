import { effect as vueEffect, stop as release, reactive as vueReactive } from "@vue/reactivity/dist/reactivity.esm-browser.prod.js";
import { scheduler } from "./scheduler";

const reactive = vueReactive;
const effect = (callback) =>
  vueEffect(callback, {
    scheduler: scheduler((task) => task),
  });

export function elementBoundEffect(el) {
  let cleanup = () => {};

  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);

    if (!el.__stimulusX_effects) {
      el.__stimulusX_effects = new Set();
    }

    el.__stimulusX_effects.add(effectReference);

    cleanup = () => {
      if (effectReference === undefined) return;

      el.__stimulusX_effects.delete(effectReference);

      release(effectReference);
    };

    return effectReference;
  };

  return [
    wrappedEffect,
    () => {
      cleanup();
    },
  ];
}

export function watch(getter, callback) {
  let firstTime = true;
  let oldValue;

  let effectReference = effect(() => {
    let value = getter();

    // JSON.stringify touches every single property at any level enabling deep watching
    JSON.stringify(value);

    if (!firstTime) {
      // We have to queue this watcher as a microtask so that
      // the watcher doesn't pick up its own dependencies.
      queueMicrotask(() => {
        callback(value, oldValue);

        oldValue = value;
      });
    } else {
      oldValue = value;
    }

    firstTime = false;
  });

  return () => release(effectReference);
}

export { effect, release, reactive };
