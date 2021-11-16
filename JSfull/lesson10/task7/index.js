const superRound = (num, prec) => {
  const press = Math.pow(10, prec);
  const resultArray = [];
  resultArray.push(Math.floor(num * press) / press);
  resultArray.push(Math.trunc(num * press) / press);
  resultArray.push(Math.ceil(num * press) / press);
  resultArray.push(Math.round(num * press) / press);
  resultArray.push(Number(num.toFixed(prec)));
  return resultArray;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
