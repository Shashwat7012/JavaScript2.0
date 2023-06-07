// JavaScript strings are for storing and manipulating text.
let a ="John";
let b = 'john';

// String Length
let c = a.length;
console.log(c);

//Escape Character
// the solution is backslash (\)
let d = "hii i am \Shashwat\ from U.P";
console.log(d);
let e = "hii i am \"Shashwat\" from U.P";

// It is a universal method.
console.log("hii " + "Shashwat");


// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:
let x = "John";
let y = new String("John");
console.log(x==y);
console.log(x===y);