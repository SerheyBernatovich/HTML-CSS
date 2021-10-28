function sortAsc(array) {
  let newArr = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i of array) {
    newArr.push(i);
    newArr.sort((a, b) => a - b);
  }
  return newArr;
}

console.log(sortAsc([800, 100, 300]));
console.log(sortAsc(1, 2, 3));

function sortDesc(array) {
  let newArr = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i of array) {
    newArr.push(i);
    newArr.sort((a, b) => b - a);
  }
  return newArr;
}

console.log(sortDesc([800, 100, 300]));
console.log(sortDesc(1, 2, 3));
