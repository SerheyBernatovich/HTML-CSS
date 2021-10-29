// function removeDuplicates(array) {
//   let newArr = [];
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   for (let i = 0; i < array.length; i += 1) {
//     if (!newArr.includes(array[i])) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicates([2, 3, 4, 2, 3]));

function removeDuplicates(array) {
  let newArr = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i of array) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(removeDuplicates([2, 3, 4, 2, 3]));
