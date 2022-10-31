const ftoc = function (num) {
  let temp = num - 32;
  temp = (temp * 5) / 9;
  const rounded = Math.round(temp * 10) / 10;
  return rounded;
};

const ctof = function (num) {
  let temp = (num * 9) / 5;
  temp += 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
