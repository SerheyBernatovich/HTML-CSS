function getFiniteNumbers(arr) {
  return arr.filter((num) => Number.isFinite(num));
}
console.log(getFiniteNumbers([1, 2, 'ff', Infinity, '1b2d', NaN, 15]));

function getFiniteNumbersV2(arr) {
  return arr.filter((num) => isFinite(num));
}
console.log(getFiniteNumbersV2([1, 2, 'ff', Infinity, '1b2d', NaN, 15]));

function getNaN(arr) {
  return arr.filter((num) => Number.isNaN(num));
}
console.log(getNaN([1, 2, 'ff', Infinity, '1b2d', NaN, 15]));

function getNaNV2(arr) {
  return arr.filter((num) => isNaN(num));
}
console.log(getNaNV2([1, 2, 'ff', Infinity, '1b2d', NaN, 15]));

function getIntegers(arr) {
  return arr.filter((num) => Number.isInteger(num));
}
console.log(getIntegers([1, 2.15, 'ff', Infinity, '1b2d', NaN, 15]));
