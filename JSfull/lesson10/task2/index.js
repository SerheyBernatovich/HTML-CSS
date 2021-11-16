function getParsedIntegers(arr) {
  return arr.map((num) => Number.parseInt(num));
}
console.log(
  getParsedIntegers([1.15, 2.55, '5ff', Infinity, '1b2d', NaN, 15.9999])
);

function getParsedIntegersV2(arr) {
  return arr.map((num) => parseInt(num));
}
console.log(
  getParsedIntegersV2([1.15, 2.55, '5ff', Infinity, '1b2d', NaN, 15.9999])
);

function getParsedFloats(arr) {
  return arr.map((num) => Number.parseFloat(num));
}
console.log(
  getParsedFloats([1.15, 2.55, '5ff', Infinity, '1b2d', NaN, 15.9999])
);

function getParsedFloatsV2(arr) {
  return arr.map((num) => parseFloat(num));
}
console.log(
  getParsedFloatsV2([1.15, 2.55, '5ff', Infinity, '1b2d', NaN, 15.9999])
);
