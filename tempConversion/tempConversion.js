const ftoc = function (temp) {
  const celsius = ((temp - 32) * 5) / 9;
  if (celsius - Math.floor(celsius) !== 0) {
    return parseFloat(celsius.toFixed(1));
  } else {
    return celsius;
  }
};

const ctof = function (temp) {
  const fahrenheit = (temp / 5) * 9 + 32;
  if (fahrenheit - Math.floor(fahrenheit) !== 0) {
    return parseFloat(fahrenheit.toFixed(1));
  } else {
    return fahrenheit;
  }
};

module.exports = {
  ftoc,
  ctof,
};
