var age = 10; // an int type
var salary = 15.0; // a double type

console.log(`The variable type of age is ${typeof age}`);
console.log(`The variable type of salary is ${typeof salary}`);

// a string type
var name = "John Smith";
console.log(`The variable type of name is ${typeof name}`);

// a function type
const displayGreetings = (name, year) => `Happy New year ${year} ${name}!`;

console.log(
  `The variable type of displayGreetings is ${typeof displayGreetings}`
);

// VIDEO 5 ASSIGNING FUNCTION TO A NEW VARIABLE
var greet = {};

const displayGreetingsWithEmoji = (name, year) => {
  return `😀 Happy new year ${year} ${name} 😀`;
};

if (age > 10) {
  greet = displayGreetings;
} else {
  greet = displayGreetingsWithEmoji;
}

console.log(greet("Michael", 2022));

// VIDEO 6 FUNCTION AS PARAMETER

const greetWithFunc = (name, year, func) => {
  return func(name, year);
};

console.log(greetWithFunc("Michael", 2022, displayGreetings));
console.log(greetWithFunc("Michael", 2022, displayGreetingsWithEmoji));
