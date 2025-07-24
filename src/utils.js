export function camelCase(subject) {
  return subject
    .replace(/:/g, "_")
    .split("_")
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

export function walk(el, callback) {
  let skip = false;
  callback(el, () => (skip = true));
  if (skip) return;

  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}
