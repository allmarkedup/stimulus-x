import { modifier } from "../modifiers";
import { isEqual } from "../utils";

modifier("isNot", (value, args = []) => {
  if (args.length === 0) {
    console.warn("Missing argument for `:isNot` modifier");
    return false;
  } else {
    return !isEqual(value, args[0]);
  }
});
