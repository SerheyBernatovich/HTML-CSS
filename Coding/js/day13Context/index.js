function printMessage(country, city) {
  console.log(this);
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
  return `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`;
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};
// option 1
// input: obj, args(optional)
// output: func;
const bindedFunc1 = printMessage.bind(user);
bindedFunc1('Ukraine', 'Odesa');

// option 2
// input: obj, args(optional)
// output: func;
const bindedFunc2 = printMessage.bind(user, 'Uk');
bindedFunc2('London'); // приоритет bind

// option 3
// input: obj, args(optional)
// output: func;
const bindedFunc3 = printMessage.bind(user, 'Uk', 'London');
bindedFunc3('Odesa'); // приоритет bind

// input: func, obj, args(optional)
// output: func;
function bind(func, context, ...argn) {
  // console.log(args);

  return function (...funcArgs) {
    // input: obj, array args(optional)
    // output: result of func;
    return func.apply(context, [...argn, ...funcArgs]);
  };
}
// test data 1
const myBindedFunc1 = bind(printMessage, user);
myBindedFunc1('Ukraine', 'Odesa');

// test data 2
const myBindedFunc2 = bind(printMessage, user, 'UK');
myBindedFunc2('Odesa');

// test data 3
const myBindedFunc3 = bind(printMessage, user, 'UK', 'Liverpool');
console.log(myBindedFunc3());
