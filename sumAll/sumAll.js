const sumAll = function (startNum, endNum) {
  if (
    Number.isInteger(startNum) &&
    Number.isInteger(endNum) &&
    startNum >= 0 &&
    endNum >= 0
  ) {
    let sum = 0;
    if (startNum < endNum) {
      for (let x = startNum; x <= endNum; x++) {
        sum += x;
      }
    } else if (startNum > endNum) {
      for (let x = startNum; x >= endNum; x--) {
        sum += x;
      }
    }
    return sum;
  } else {
    return "ERROR";
  }
};

module.exports = sumAll;
