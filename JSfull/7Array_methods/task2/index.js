function sortDesc(arr) {
  let newArr = arr.slice();
  newArr.sort((a, b) => b - a);
  return newArr;
}

console.log(sortDesc([3, 4, 1, 5]));
