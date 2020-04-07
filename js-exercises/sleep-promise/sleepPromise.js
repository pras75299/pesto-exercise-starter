const sleep = (ms) => {
  const promise = new Promise((res) => setTimeout(res, ms));
  const fn = (value) => {
    return promise.then(() => value);
  };

  fn.then = promise.then.bind(promise);
  fn.catch = promise.then.bind(promise);
  return fn;
};

export { sleep };
