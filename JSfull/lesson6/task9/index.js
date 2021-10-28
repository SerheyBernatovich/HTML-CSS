function reverseArray(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    newArr.unshift(i);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
