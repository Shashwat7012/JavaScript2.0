// New Features in ECMAScript 2017
// This chapter introduces the new features in ECMAScript 2017:

// JavaScript String padding
// JavaScript Object entries()
// JavaScript Object values()
// JavaScript async and await
// JavaScript Object.getOwnPropertyDescriptors


//Padding
let txt = '5';
let b  = txt.padStart(4,0);
console.log(b);
let a = txt.padEnd(6,0);
console.log(a);

//Object.entries()
const person = {
    firstName: "Shashwat",
    lastName: "Pandey",
    age:50,
};
let text = Object.entries(person);
console.log(text);
let text1 = Object.values(person);
console.log(text1);

// Async Functions:-
//....In Async module.