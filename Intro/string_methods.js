// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
let a = "Shashwat, Pandey"
let partOfa = a.slice(9,16);
console.log(partOfa);
let b = a.slice(8);
console.log(b);
//// if parameter is negetive the position is counted end of the string.
let c = a.slice(-8, -6);
console.log(c);

// Replace the string value
let aa = "HELLO";
let bb = aa.replace("HII ", "SHASHWAT");
console.log(bb);

// replaceAll is the ES2021's Part

// Upper Case and lower Case

let text = "shashwat";
let text2 = text.toUpperCase();
console.log(text2);

let l = "Shashwat";
let l1 = l.toLowerCase();
console.log(l1);

// string Concat
let co = "Hello";
let co1 = "World";
let co3 = co.concat(" ",co1);
console.log(co3);

// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced


// Trim:- That remove white spaces from a string.
let txt = "    hello world!      ";
let txt2 = txt.trim();
let ltxt = text.length;
let ltxt2 = txt2.length;
console.log(ltxt2);

// JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// Example
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();

// trimEnd():- ............................



// padStart:- It pads a string with another string (multiple times) until it reaches a given length.
let text4 = "5";
let padded = text4.padStart(4,"0");
console.log(padded);

// The padStart() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

// padEnd():- pad after the frist string




// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

let h = "hello"
let h1 = h.charAt(0);
console.log(h1);

let p = "Bye";
let p1 = p[0];
console.log(p1);



// Converting a string into an array
// If you want to work with a string as an array, you can convert it to an array.
 let s = "a,b,c,d";
 const ss = s.split(",");
 console.log(ss[0]);

