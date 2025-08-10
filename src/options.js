const defaultOptions = {
  optIn: false,
  attributePrefix: "data-bind-",
  shorthandAttributePrefix: "sx-",
  compileDirectives: true,
  trackDeep: false,
};

let options = defaultOptions;

export function getOption(key) {
  return options[key];
}

export function getOptions() {
  return options;
}

export function setOptions(opts) {
  options = Object.assign({}, defaultOptions, opts);
  return options;
}
