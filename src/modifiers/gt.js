import { modifier } from "../modifiers";

modifier("gt", (value, args = []) => {
  if (args.length === 0) {
    console.warn("Missing argument for `:gt` modifier");
    return false;
  }

  return value > args[0];
});
