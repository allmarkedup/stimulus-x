import { modifier } from "../modifiers";

modifier("gte", (value, args = []) => {
  if (args.length === 0) {
    console.warn("Missing argument for `:gte` modifier");
    return false;
  }

  return value >= args[0];
});
