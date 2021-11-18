// algo
// 1 iterate numbers from 2 to num
// 2 iterate numbers from 2 to i
// 3
// 4
// input: num;
// output: boolean;
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    // console.log('inner number' + number);
    if (number % index === 0) {
      // console.log('number' + i + 'is not prime');
      return false;
    }
  }
  return true;
}

// input: num
// output: undefined
function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

getPrimes(15);
