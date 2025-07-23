export function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  }
  return setClassesFromString(el, value);
}

function setClassesFromString(el, classString) {
  classString = classString || "";
  let missingClasses = (classString) =>
    classString
      .split(" ")
      .filter((i) => !el.classList.contains(i))
      .filter(Boolean);

  let classes = missingClasses(classString);
  el.classList.add(...classes);

  return () => el.classList.remove(...classes);
}

function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);

  let forAdd = Object.entries(classObject)
    .flatMap(([classString, bool]) => (bool ? split(classString) : false))
    .filter(Boolean);
  let forRemove = Object.entries(classObject)
    .flatMap(([classString, bool]) => (!bool ? split(classString) : false))
    .filter(Boolean);

  let added = [];
  let removed = [];

  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });

  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });

  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}
