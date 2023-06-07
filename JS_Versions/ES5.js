// // ECMAScript 2009, also known as ES5, was the first major revision to JavaScript.

// // This chapter describes the most important features of ES5.


// "use strict"
// String[number] access
// Multiline strings
// String.trim()
// Array.isArray()
// Array forEach()
// Array map()
// Array filter()
// Array reduce()
// Array reduceRight()
// Array every()
// Array some()
// Array indexOf()
// Array lastIndexOf()
// JSON.parse()
// JSON.stringify()
// Date.now()
// Date toISOString()
// Date toJSON()
// Property getters and setters
// Reserved words as property names
// Object methods
// Object defineProperty()
// Function bind()
// Trailing commas


// Some Important features:-
//1. charAt()
let str = "Hello";
let a = str.charAt(0);
console.log(a);


// Strings Over Multiple Lines
// ES5 allows string literals over multiple lines if escaped with a backslash:

// "Hello \ 
// Shashwat";


console.log(Array.isArray([1, 3, 5]));


// JSON.stringify()
// A common use of JSON is to send data to a web server.

// When sending data to a web server, the data has to be a string.

// Imagine we have this object in JavaScript:
let obj = {name:"Shashwat",age:"19",city:"Azamgarh"};
let myJson  = JSON.stringify(obj);
console.log(myJson);


//Object.defineProperty()
// Object.defineProperty() is a new Object method in ES5.

// It lets you define an object property and/or change a property's value and/or metadata.


//WARNING !!!

// JSON does not allow trailing commas.
