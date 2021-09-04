class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  id = (Math.random() * 1000).toFixed();

  dateCreated = new Date();

  isConfirmed = false;

  dateConfirmed = new Date();

  checkPrice() {
    return this.price > 1000 ? true : false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell' ? true : false;
  }
}

const firstOrder = new Order(1200, 'Miami', 'Buy');
firstOrder.isValidType();
firstOrder.confirmOrder();
console.log(firstOrder);
console.log(firstOrder);

// console.log(firstOrder.checkPrice());
// console.log(firstOrder.confirmOrder());
console.log(firstOrder.isValidType());
// console.log(firstOrder.dateConfirmed);

// const secondOrder = new Order(999, 'Tokyo', 'Sell');
// const thirdOrder = new Order(1500, 'London', 'Buy');

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
