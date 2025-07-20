const modifierHandlers = [];

export function modifier(name, handler) {
  modifierHandlers.push({
    name,
    handler,
  });
}

export function applyModifiers(value, modifiers = []) {
  return modifiers.reduce((value, modifier) => {
    if (modifierExists(modifier)) {
      return applyModifier(modifier, value);
    } else {
      console.error(`Unknown modifier '${modifier}'`);
      return value;
    }
  }, value);
}

function applyModifier(name, value) {
  return getModifier(name).handler(value);
}

function modifierExists(name) {
  return !!getModifier(name);
}

function getModifier(name) {
  return modifierHandlers.find((modifier) => modifier.name === name);
}
