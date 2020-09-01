const removeFromArray = function (arr, ...itemsToRemove) {
  itemsToRemove.forEach((itemToRemove) => {
    arr = arr.filter((item) => item !== itemToRemove);
  });
  return arr;
};

module.exports = removeFromArray;
