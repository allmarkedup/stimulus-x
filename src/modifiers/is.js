import { modifier } from "../modifiers";
import { isEqual } from "../utils";

modifier("is", (value, args = []) => {
  if (args.length === 0) {
    console.warn("Missing argument for `:is` modifier");
    return false;
  } else {
    return isEqual(value, args[0]);
  }
});
