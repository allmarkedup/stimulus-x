import { modifier } from "../modifiers";

modifier("lt", (value, args = []) => {
  if (args.length === 0) {
    console.warn("Missing argument for `:lt` modifier");
    return false;
  }

  return value < args[0];
});
