function multiRound(number) {
  const resultArray = [];

  resultArray.push(Math.floor(number * 100) / 100);
  resultArray.push(Math.trunc(number * 100) / 100);
  resultArray.push(Math.ceil(number * 100) / 100);
  resultArray.push(Math.round(number * 100) / 100);
  resultArray.push(Number(number.toFixed(2)));
  return resultArray;
}

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
