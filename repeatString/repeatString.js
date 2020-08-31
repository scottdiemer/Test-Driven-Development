const repeatString = function (str, numOfTimes) {
  if (numOfTimes === 0) return "";

  if (numOfTimes < 0) return "ERROR";

  let newString = str;
  for (x = 1; x < numOfTimes; x++) {
    newString += str;
  }
  return newString;
};

module.exports = repeatString;
