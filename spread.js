const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

//ES5 way of combining two arrays into one
let megaAnimalsArray = [];

reptiles.forEach((reptile) => {
  megaAnimalsArray.push(reptile);
});

mammals.forEach((mammal) => {
  megaAnimalsArray.push(mammal);
});

console.log(megaAnimalsArray);

//SPREAD OPERATOR, with ES6
let animalsArray = [...reptiles, ...mammals];

console.log(animalsArray);
