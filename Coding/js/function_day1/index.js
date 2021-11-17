function getSenseOfLife() {
  return 42;
}

// const res = getSenseOfLife();
// console.log(res);
console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}

// test
console.log(getSquared(4));
console.log(getSquared(0));
console.log(getSquared(-2));
// ======
// input: Number
// output: undefined

function printMesaage(num) {
  console.log(`I am ${num} years old`);
}
// declaretion
// const printMesaage=function(num){
//   console.log(`I am ${num} years old`);}
// // test
console.log(printMesaage(30));

// ==========
// const mult = (num1, num2) => num1 * num2;
const mult = (num1, num2) => {
  return num1 * num2;
};
console.log(mult(10, 2));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
