function squareArray(num) {
  if (!Array.isArray(num)) {
    return null;
  }
  return num.map((el) => el * el);
}
console.log(squareArray([2, 3, 4, 5, 6]));
