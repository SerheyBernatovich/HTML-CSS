function reverseArray(num) {
  const arr = num.slice();
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reverse();
}
console.log(reverseArray([2, 3, 4, 5, 6]));
