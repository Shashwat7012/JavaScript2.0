// // // Defines that JavaScript code should be executed in "strict mode".
// // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
"use strict";
y=3.14;

x = 3.14;
console.log(y);
// It is globally declared. so it includes all the code.
console.log(x);


// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.


// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.


// deleting  the object is also not allowed in non-defined way.
// The word eval cannot be used as a variable:


// let eval = 3.14;         // This will cause an error



// The this keyword in functions behaves differently in strict mode.

// The this keyword refers to the object that called the function.



// Future Proof!
// Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

// These are:

// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield