'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type, confirmed = false) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = confirmed;
    this.id = Math.random() + '';
    this.dateCreated = new Date();
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const order1 = new Order(100, 'Kyiv', 'Sell');
console.log(order1.isValidType());
