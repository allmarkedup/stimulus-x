export function bind(element, name, value) {
  switch (name) {
    // case "class":
    //   bindClasses(element, value);
    //   break;

    case "checked":
    case "selected":
      bindAttributeAndProperty(element, name, value);
      break;

    default:
      bindAttribute(element, name, value);
      break;
  }
}

// function bindClasses(element, value) {
//   if (element.__value_bindings_undo_classes) element.__value_bindings_undo_classes();
//   element.__value_bindings_undo_classes = setClasses(element, value);
// }

function bindAttribute(el, name, value) {
  if ([null, undefined, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name)) value = name;
    setIfChanged(el, name, value);
  }
}

// function bindAll(element, obj) {
//   Object.keys(obj).forEach((name) => bind(element, name, getProperty(obj, name)));
// }

function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}

function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}

function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}

// As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
const booleanAttributes = new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
]);

function isBooleanAttr(attrName) {
  return booleanAttributes.has(attrName);
}

function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
