// const array = [77, 66, 13, 4];
// // console.log(array);

// // input arr, func
// // output arr

// // callback
// // input: num, index(option), array(optional);
// // output: boolean;

// // algo
// // 1. iterate arr
// // 2. apply callback for every el
// // 3 if callback true-add to the new arr
// // eslint-disable-next-line no-shadow
// const filterArrayElements = (arr, callback) => {
//   const result = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const el = arr[index];
//     if (callback(el, index, arr)) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// // test data
// console.log(filterArrayElements(arr, el => el % 2 === 0));

// map

const array = [22, 10, 5];

const mapArrayElements = (arr, callback) => {
  const entireArr = arr;
  const newArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    const arrElement = arr[index];
    newArray.push(callback(arrElement, index, entireArr));
  }
  return newArray;
};
console.log(mapArrayElements(array, el => el / el));
