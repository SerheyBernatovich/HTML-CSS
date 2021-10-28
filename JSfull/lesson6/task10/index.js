function cloneArr(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    newArr.push(i);
  }
  return newArr;
}

console.log(cloneArr([1, 2, 2, 3]));
console.log(cloneArr(1, 2, 3));
