function swap(numbers) {
  const [first, ...arr] = numbers;
  return [...arr, first];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
// вариант первый
function swapManual(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    arr.push(numbers[i]);
  }
  arr.push(numbers[0]);
  arr.shift(numbers[0]);
  return arr;
}

// вариант второй
// function swapManual(numbers) {
//   const arr = [];
//   for (let i of numbers) {
//     arr.push(i);
//   }
//   arr.shift();
//   arr.push(numbers[0]);
//   return arr;
// }

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
