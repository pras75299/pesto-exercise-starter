const regExMatcher = inputPhoneNumber => {
  const regex = /^(1\s)?\(?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;
  const pattern = new RegExp(regex);
  const resultOfRegx = pattern.test(inputPhoneNumber);
  return resultOfRegx;
};
function telephoneCheck(inputPhoneNumber) {
  const resultOfReplacement = regExMatcher(inputPhoneNumber);
  return resultOfReplacement;
}

export { telephoneCheck };
