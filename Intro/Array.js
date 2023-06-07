// An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];
// An array can hold many values under a single name, and you can access the values by referring to an index number.

const car = [];
car[0]= "Saab";
car[1]= "Volvo";
car[2]= "BMW";

// const carss = new Array("Saab", "Volvo", "BMW");
// The two examples above do exactly the same.

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.
// let a = car[0];
console.log(car[0]);

const carss = ["Saab", "Volvo", "BMW"];
carss[0] = "Audi";
console.log(carss);

// We can convert array to string
// from tostring function

const fruit = ["Banana", "Orange", "Mango"]
let f = fruit.toString();
console.log(f);

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

const person = {firstName:"john", lastName:"Opp", age:"34"};
console.log(person.firstName);

// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

// cars.length   // Returns the number of elements
// cars.sort()   // Sorts the array

// The length property is always one more than the highest array index



// Accessing the Last Array Element
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitss = fruits[fruits.length - 1];

// Adding array in elements 
const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruitsss.push ("Litchi");
console.log(fruitsss);

// New element can also be added to an array using the length property:

// Example
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits



// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array:

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
let x = fruits.sort();
console.log(x);
