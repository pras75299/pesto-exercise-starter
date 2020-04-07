function objectInvert(obj) {
  let objectInverted = {};
  for (let key in obj) {
    objectInverted[obj[key]] = key;
  }
  return objectInverted;
}

export { objectInvert };
