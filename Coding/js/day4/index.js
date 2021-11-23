const numbersList = [5, 0, 8, 10, -4, 50, 220];
// input: callback, this(optional);
// output: array;

// callback
// input element, index(optional), array(optional)
// output element
// bad
// const mapRes = numbersList.map(el => {
//   const res = el * el;
//   return res;
// });
console.log(numbersList.map(el => el * el));

// ======forEach
// input: callback, this(optional);
// output: array;

// callback
// input element, index(optional), array(optional)
// output underfine

numbersList.forEach(el => {
  if (el > 100) {
    console.log(el);
  }
});

// =======find
// input: callback, this(optional);
// output: element;

// callback
// input element, index(optional), array(optional)
// output boolean
// bad
// const result = numbersList.find(el => {
//   if (el % 2 === 0) {
//     return true;
//   }
//   return false;
// });
console.log(numbersList.find(el => el % 2 === 0));

// wrong

console.log(numbersList.filter(el => el % 2 === 0)[0]);

// ======= reduce
// input: callback, acc init value, this(optional);
// output: number

// callback
// input element, acc
// output acc

// ====bad
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// const elem = transactions.reduce((acc, el) => {
//   acc += el;
//   return acc;
// }, 0);
// console.log(elem);
console.log(transactions.reduce((acc, el) => acc + el));
