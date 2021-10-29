const getSubArray = (arr, numberOfElements) => {
  const newArr = [];
  arr.length = numberOfElements;

  for (let i of arr) {
    newArr.push(i);
  }
  return newArr;
};

console.log(getSubArray([11, 4, 8, 3], 3));
