// Extra large and Extra small number can be written with scintific(exponent) notation.
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123


// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let a = 100;
let b = "Hii";
console.log(a/b);
// A number divided by non numeric string is NaN.

let aa = 100;
let bb = "10";
console.log(aa/bb);