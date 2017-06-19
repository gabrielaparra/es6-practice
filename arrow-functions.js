//OLD SYNTAX
setTimeout(function() {
  console.log('... 3 seconds later');
}, 3000);

//NEW ARROW SYNTAX
setTimeout( () => {
  console.log('... 5 seconds later');
}, 5000);

//OLD SYNTAX
var foods = ['cookies', 'sandwiches', 'pizzas', 'bagels'];

foods.forEach( function(food) { console.log(food); });

//NEW ARROW SYNTAX
foods.forEach((food) => { console.log(food); });

//OLD SYNTAX
foods.map( function(food) { return food.toUpperCase(); });

//NEW ARROW SYNTAX
console.log(foods.map( food => {return food.toUpperCase(); }));

class Counter {
  constructor() {
    this.count = 1;
  }

  //OLD SYNTAX, console logging won't work
  //it will log NaN
  // countUp() {
  //   setInterval(function () {
  //     console.log(this.count);
  //     this.count += 1;
  //   }, 1000);
  // }

  //NEW SYNTAX
  countUp() {
    setInterval( () => {
      console.log(this.count);
      this.count += 1;
    }, 1000);
  }
}


const myCounter = new Counter();
myCounter.countUp();
