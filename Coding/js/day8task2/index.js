// input obj, obj
// output boolean
// algo:
// 0. compare length, if not equal->false
// 1. iterate obj1 keys
// 2. compare if(value1 !=value2)-> false
// 3.

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i += 1) {
    const prop = keys1[i];

    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
