// inp obj
// out arr
// alg
// 1 get key, values
// 2 add id to every value(map)
// 3 sort
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customers]) => ({ ...customers, id }))
    .sort((a, b) => a.age - b.age);
// destructing
const arr = [10, 22, 11];
const [el1, el2] = arr;
console.log(el1, el2);
// test
const consumers = {
  'consumer-id-1': {
    name: 'William',
    age: 54,
  },
  'consumer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(Object.entries(consumers));
console.log(getCustomersList(consumers));
