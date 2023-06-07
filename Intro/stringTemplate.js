// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let text = `Hello World`;
console.log(text);

// We can use both double quote and single quote in templates.
let text1 = `He's often called "Johnny"`;

// let txt = "hii
// " 
// That will not support in quotes


// but from back - tics
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;

//Interpolation:-
// Template literals provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// Varible Substitution:-

let firstName = "John";
let lastName = "Doe";

let text5 = `Welcome ${firstName} ${lastName}`;
console.log(text5);