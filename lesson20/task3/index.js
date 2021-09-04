class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}

const appleWallet = new Wallet();
appleWallet.deposit(1500);
console.log(appleWallet.getBalance());
appleWallet.withdraw(1200);
console.log(appleWallet.getBalance());
appleWallet.withdraw(1200);
console.log(appleWallet.getBalance());
