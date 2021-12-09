const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    console.log(this);

    this.intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      this.secondsPassed += 1;
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

//
// const obj = {
//   firstName: 'James',
//   printName() {
//     console.log(this);
//   },
// };

// obj.printName();

// const func = obj.printName;
// func();
// //
// [1, 2].filter(function (el) {
//   console.log(this);
// });

// test data

// timer.stopTimer();
