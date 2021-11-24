const numbersList = [1, 2, 3, 4, 5];
// input: num;
// output: num;
const res = numbersList.push('sasas');
// numbersList[numbersList.length] = 222;
console.log(res);

console.log(numbersList);
// =========
const numbersList2 = [1, 2, 3, 4, 5];
// input: none;
// output: num;
console.log(numbersList2.shift());
console.log(numbersList2);

// ===callback
/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */
// input: num, num,callback;
// output: underfine;

// callback
// input: num;
// output: underfine;

function sum(from, to, printer) {
  let result = 0;
  for (let ind = from; ind <= to; ind += 1) {
    result += ind;
  }
  printer(result);
}

// test data
const num1 = 5;
const num2 = 10;

function printResultExample(res) {
  alert(res);
}
sum(num1, num2, printResultExample);

// ========
// input: callback;
// output: array;
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// bad
// const filterRes = anotherNumbersList.filter(function (num) {
//   if (num > 5) {
//     return true;
//   }else{
//   return false;
//   }
// });
// console.log(filterRes);

// callback
// input: num, index(option), array(optional);
// output: boolean;
//
// good
console.log(anotherNumbersList.filter(el => el > 10));
