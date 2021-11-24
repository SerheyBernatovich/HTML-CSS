export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}
const user = {
  name: 'Bob',
  sayHi() {
    console.log(`hi, ${this.name}`);
  },
};

const result = defer(user.sayHi.bind(user), 1000);
result();
