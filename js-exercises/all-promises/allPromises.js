const allPromises = (args) => {
  if (args === undefined) return Promise.resolve();
  const valuesArray = [];
  args.forEach((element, index) => {
    if (element instanceof Promise) {
      return element.then((result) => (valuesArray[index] = result));
    } else {
      return (valuesArray[index] = element);
    }
  });
  return new Promise((resolve) => resolve(valuesArray));
};

export { allPromises };
