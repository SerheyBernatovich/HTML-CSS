const flatArray = (arr) => {
  const arr1 = arr.slice();
  const newArr = arr1.flat();
  return newArr.sort((a, b) => a - b);
};

console.log(flatArray([1, 4, [5, 7, 3], 6]));
