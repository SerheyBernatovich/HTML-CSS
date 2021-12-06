function getDiff(startDate, endDate) {
  let result = 0;
  if (startDate > endDate) {
    result = new Date(startDate - endDate) / 1000;
  } else {
    result = new Date(endDate - startDate) / 1000;
  }
  return `${Math.floor(result / 3600 / 24)}d ${Math.floor(result / 3600) % 24}h ${
    Math.floor(result / 60) % 60
  }m ${Math.floor(result) % 60}s`;
}

console.log(getDiff(new Date(2020, 32, 5, 22, 33, 33, 0), new Date(2021, 33, 5, 33, 33, 33, 0)));
