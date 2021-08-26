const cleanTransactionsList = (transactions) =>
  transactions
    .filter((el) => !isNaN(el))
    .map((el) => '$' + Number(el).toFixed(2));
console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ']));
