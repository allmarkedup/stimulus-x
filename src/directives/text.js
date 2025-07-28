import { directive } from "../directives";
import { mutateDom } from "../mutation";

directive("text", (el, { property, modifiers }, { effect, evaluate, modify }) => {
  effect(() =>
    mutateDom(() => {
      const value = modify(evaluate(property), modifiers);
      el.textContent = value.toString();
    })
  );
});
