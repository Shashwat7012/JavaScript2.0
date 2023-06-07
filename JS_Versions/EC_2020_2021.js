// Promise any():
// const first = await Promise.any([prom1,prom2,prom3]);
// String replaceAll()
// Numeric Separators (_)


// New Features in ES2022
// Array at()
// String at()
// RegExp /d
// Object.hasOwn()
// error.cause
// await import
// Private methods and fields
// Class field declarations


// JavaScript String ReplaceAll()
// ES2021 introduced the string method replaceAll():

// Example
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);


//Array.at()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

//string.at()
const names = "Shashwat";
let letter = names.at(2);
console.log(letter);