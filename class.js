//ES5

//class: another way to create constructor functions and prototypes.

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// Product.prototype.priceAfterTax = function() {
//   var newPrice = (this.price * 1.07).toFixed(2);
//   //price plus 7% of tax
//   console.log(this.name + ' price after tax is $' + newPrice);
// };
//

//Inheritance with ES5

// function Electronic (name, price, brand) {
//   Product.call(this, name, price);
//   this.brand = brand;
// }

//ES6

class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }

  priceAfterTax() {
    var newPrice = (this.price * 1.07).toFixed(2);
    //price plus 7% of tax
    console.log(this.name + ' price after tax is $' + newPrice);
  }
}

// Creating the instances

var product1 = new Product('Heating Blanket', 42.95);
var product2 = new Product('Fire Stick', 29.99);

console.log(product1.priceAfterTax());

// Inheritance with ES6

class Electronic extends Product {
  constructor (name, price, brand) {
    //'super' invokes the constructor() of the Product class
    super(name, price);
    this.brand = brand;
  }
}

var product3 = new Product('iPad', 675.45, 'Apple');
var electronic1 = new Electronic('Amazon Echo', 179.99, 'Amazon');

console.log(electronic1.priceAfterTax());
