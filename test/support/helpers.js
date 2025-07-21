export function nextTick(fn) {
  return new Promise((resolve) =>
    setTimeout(async () => {
      resolve(fn ? await fn() : undefined);
    }, 0)
  );
}
