export class Wallet {
  #balance = 0;
  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`No enough funds`);
      return;
    }
    this.#balance -= amount;
  }
}
const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(30);
console.log(wallet1.getBalance());
wallet1.withdraw(20);
console.log(wallet1.getBalance());
