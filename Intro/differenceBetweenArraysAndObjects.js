// // // // // In JavaScript, arrays use numbered indexes.  

// // // // // In JavaScript, objects use named indexes.
// // // // JavaScript does not support associative arrays.
// // // // You should use objects when you want the element names to be strings (text).
// // // // You should use arrays when you want the element names to be numbers.


// // // // JavaScript has a built-in array constructor new Array().

// // // But you can safely use [] instead.

// // // These two different statements both create a new empty array named points:

// // // const points = new Array();
// // // const points = [];


// // These two different statements both create a new array containing 6 numbers:

// // const points = new Array(40, 100, 1, 5, 25, 10);
// // // const points = [40, 100, 1, 5, 25, 10];


// // The new keyword can produce some unexpected results:

// // // Create an array with three elements:
// // const points = new Array(40, 100, 1);


// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":

// const fruits = ["Banana", "Orange", "Apple"];
// let type = typeof fruits;
// The typeof operator returns object because a JavaScript array is an object.

// Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

// Array.isArray(fruits);
// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:

// const fruits = ["Banana", "Orange", "Apple"];

// fruits instanceof Array;
