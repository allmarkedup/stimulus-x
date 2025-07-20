import { directive } from "../directives";
import { mutateDom } from "../mutation";
import { bind } from "../bind";

directive("attr", (el, { property, subject, modifiers }, { effect, evaluate, modify }) => {
  effect(() => {
    mutateDom(() => {
      const value = modify(evaluate(property), modifiers);
      bind(el, subject, value);
    });
  });
});
