const pickProps = (obj, props) => {
  let newObj = {};

  for (let key in obj) {
    props.forEach((element) => {
      if (key === element) {
        newObj[element] = obj[element];
      }
    });
  }
  return newObj;
};

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
