const getAdults = (obj) => {
  const newObj = {};
  for (let age in obj) {
    // console.log(obj[age]);
    if (obj[age] >= 18) {
      newObj[age] = obj[age];
    }
  }
  return newObj;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
