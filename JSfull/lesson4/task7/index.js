const n = 0;
const m = 100;
let sum = 0;

for (let i = n; i <= m; i += 1) {
  if (i % 2 === 1) {
    console.log('Found');
    sum += i;
  }
}
