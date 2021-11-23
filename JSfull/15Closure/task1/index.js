export function makeCounter() {
  let count = -1;
  return function counts() {
    return (count += 1);
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
