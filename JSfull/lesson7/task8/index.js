function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
}
console.log(cloneArr([2, 3, 4, 5, 6]));
