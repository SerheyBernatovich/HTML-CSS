let sum = 0;
for (let n = 1; n <= 1000; n += 1) {
  sum += n;
}
const div = sum / 1234;
const mods = sum % 1234;

const rezult = true ? div > mods : mods > div;
console.log(rezult);
