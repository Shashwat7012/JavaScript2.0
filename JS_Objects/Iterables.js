// Iterable objects are objects that can be iterated over with for..of.

// Technically, iterables must implement the Symbol.iterator method.

const name1 = "Shashwat";

// List all Elements
let text = ""
for (const x of name1) {
  text += x + " ";
}
console.log(text);

// for in over an array
const letters = ["a","b","c"];

// List all Elements
let text1 = "";
for ( const x of letters) {
  text1 += x + " ";
}
console.log(text1);
