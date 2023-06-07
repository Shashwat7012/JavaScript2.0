// // // In JavaScript, almost "everything" is an object.

// // // Booleans can be objects (if defined with the new keyword)
// // // Numbers can be objects (if defined with the new keyword)
// // // Strings can be objects (if defined with the new keyword)
// // // Dates are always objects
// // // Maths are always objects
// // // Regular expressions are always objects
// // // Arrays are always objects
// // // Functions are always objects
// // // Objects are always objects


// // JavaScript Primitives
// // A primitive value is a value that has no properties or methods.

// // 3.14 is a primitive value

// // A primitive data type is data that has a primitive value.

// // JavaScript defines 7 types of primitive data types:

// // Examples
// // string
// // number
// // boolean
// // null
// // undefined
// // symbol
// // bigint

// Immutable
// Primitive values are immutable (they are hardcoded and cannot be changed).

// if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

//Object Literal
const a  = {fn: "Shashwat", Ln: Pandey};
const b = {fn: "Shashwat",
 Ln: Pandey};
const c = {};
c.firstname =  "Shashwat";
c.Lastname = "Pandey";

// new keyWord
const  bb = new Object();
bb.firstname =  "Shashwat";
bb.Lastname = "Pandey";

// The examples above do exactly the same.

// But there is no need to use new Object().

// For readability, simplicity and execution speed, use the object literal method.



// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// If person is an object, the following statement will not create a copy of person:

// const x = person;  // Will not create a copy of person.
// The object x is not a copy of person. It is person. Both x and person are the same object.

// Any changes to x will also change person, because x and person are the same object




