const modifierHandlers = [];

export function modifier(name, handler) {
  modifierHandlers.push({
    name,
    handler,
  });
}

export function applyModifiers(value, modifiers = []) {
  return modifiers.reduce((value, modifier) => {
    const { name, args } = parseModifierNameAndArguments(modifier);
    if (modifierExists(name)) {
      return applyModifier(value, name, args);
    } else {
      console.error(`Unknown modifier '${modifier}'`);
      return value;
    }
  }, value);
}

function applyModifier(value, name, args = []) {
  return getModifier(name).handler(value, args);
}

function modifierExists(name) {
  return !!getModifier(name);
}

function getModifier(name) {
  return modifierHandlers.find((modifier) => modifier.name === name);
}

function parseModifierNameAndArguments(modifier) {
  const matches = modifier.match(/^([^\(]+)(?=\((?=(.*)\)$)|$)/);

  if (matches && typeof matches[2] !== "undefined") {
    const argStr = matches[2].trim();
    const firstChar = argStr[0];
    const lastChar = argStr[argStr.length - 1];
    let argValue = null;

    if (
      (firstChar === "'" && lastChar === "'") ||
      (firstChar === "`" && lastChar === "`") ||
      (firstChar === `"` && lastChar === `"`)
    ) {
      argValue = argStr.slice(1, argStr.length - 1);
    } else {
      argValue = JSON.parse(argStr);
    }

    return { name: matches[1], args: [argValue] };
  } else {
    return { name: modifier, args: [] };
  }
}
