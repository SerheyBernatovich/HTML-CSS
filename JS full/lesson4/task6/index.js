const star = 90;
const end = 100;
let result = 0;

for (i = star; i <= end; i++) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 4 === 2) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }
}
