import { effect as vueEffect, stop as release, reactive, raw } from "@vue/reactivity";
import { scheduler } from "./scheduler";

const effect = (callback) =>
  vueEffect(callback, {
    scheduler: scheduler((task) => task),
  });

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
