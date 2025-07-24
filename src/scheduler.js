let flushPending = false;
let flushing = false;
let queue = [];
let lastFlushedIndex = -1;
let tickStack = [];
let isHolding = false;

export function scheduler(callback) {
  queueJob(callback);
}

export function queueJob(job) {
  if (!queue.includes(job)) queue.push(job);

  queueFlush();
}

export function dequeueJob(job) {
  let index = queue.indexOf(job);

  if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}

function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;

    queueMicrotask(flushJobs);
  }
}

export function flushJobs() {
  flushPending = false;
  flushing = true;

  for (let i = 0; i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }

  queue.length = 0;
  lastFlushedIndex = -1;

  flushing = false;
}

export function nextTick(callback = () => {}) {
  queueMicrotask(() => {
    isHolding ||
      setTimeout(() => {
        releaseNextTicks();
      });
  });

  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}

export function releaseNextTicks() {
  isHolding = false;

  while (tickStack.length) tickStack.shift()();
}

export function holdNextTicks() {
  isHolding = true;
}
