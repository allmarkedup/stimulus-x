import { directive } from "../directives";
import { mutateDom } from "../mutation";
import { bind } from "../attributes";

directive("attr", (el, { property, attributeName, modifiers }, { effect, evaluate, modify }) => {
  effect(() => {
    mutateDom(() => {
      const value = modify(evaluate(property), modifiers);
      bind(el, attributeName, value);
    });
  });
});
