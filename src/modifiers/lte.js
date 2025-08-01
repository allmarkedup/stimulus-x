import { modifier } from "../modifiers";

modifier("lte", (value, args = []) => {
  if (args.length === 0) {
    console.warn("Missing argument for `:lte` modifier");
    return false;
  }

  return value <= args[0];
});
