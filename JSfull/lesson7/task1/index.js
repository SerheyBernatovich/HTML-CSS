function getSpecialNumber(arr) {
  return arr.filter((num) => num % 3 === 0);
}

console.log(getSpecialNumber([2, 3, 4, 5, 6, 7, 9]));

// function getSpecialNumber(arr) {
//   let newArr = [];
//   arr.forEach(function (num) {
//     if (num % 3 === 0) {
//       newArr.push(num);
//     }
//   });
//   return newArr;
// }

// console.log(getSpecialNumber([2, 3, 4, 5, 6, 7, 9]));
