// input arr
// output obj
// algo
// 1 create empty obj
// 2 iterate arays
// 3 put key/value to the obj
//
// function buildObject(keysList, valuesList) {
//   const res = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     res[keysList[index]] = valuesList[index];
//   }
//   return res;
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(buildObject(keys, values));

function buildObject(keysList, valuesList) {
  return keysList.reduce(
    (acc, key, index) => ({
      ...acc,
      [key]: valuesList[index],
    }),
    {},
  );
}
//   const res = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     res[keysList[index]] = valuesList[index];
//   }
//   return res;
// }

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
// ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(buildObject(keys, values));
