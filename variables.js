//'for' loops and 'if' statements are considered blocks, not functions
//so variables declared inside them are accesible outside the statements

//Creating a variable with 'let' creates block scope variable,
//even if it's declared inside a 'for' loop or an 'if' statements it will
//only be available inside the loop.
//if 'let' is used outside one of these, it will be of the scope of the block
//it's in

let isHungry = 'false';

//Constants are also available with ES6, they are declared in the following way:
//for values that don't need to change.

const PI = 3.1415;
const oneSecond = 1000;

//Constants can be re-assigned new values, even if that doesn't make a lot of
//sense
