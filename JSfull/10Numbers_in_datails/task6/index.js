const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  const resultArray = [];
  for (let i = 0; i < length; i += 1) {
    resultArray.push(Math.round(Math.random() * (to - from) + from));
  }
  // console.log(resultArray);
  return resultArray;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
