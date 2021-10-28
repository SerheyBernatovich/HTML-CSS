function squareArray(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    newArr.push(i * i);
  }
  return newArr;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
