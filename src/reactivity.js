import { stop as release, reactive, ReactiveEffect } from "@vue/reactivity";
import { scheduler } from "./scheduler";

function effect(callback) {
  const effectInstance = new ReactiveEffect(callback, {
    scheduler: scheduler((task) => task),
  });

  effectInstance.run.bind(effectInstance)();
  return effectInstance;
}

export function elementBoundEffect(el) {
  let cleanup = () => {};

  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);

    if (!el._stimulus_x_effects) {
      el._stimulus_x_effects = new Set();
    }

    el._stimulus_x_effects.add(effectReference);

    cleanup = () => {
      if (effectReference === undefined) return;

      el._stimulus_x_effects.delete(effectReference);

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

export { effect, release, reactive, raw };
