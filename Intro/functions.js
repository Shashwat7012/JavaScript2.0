// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).
function Multiply(p1,p2){
    return p1*p2;
}
 let a = Multiply(10,10);
 console.log(a);

//  A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}
let x = myfunction(11,12);
console.log(x);
function myfunction(p1,p2){
    return p1*p2;
}

// Temprature converter

function converter(f){
    return (5/9) * (f-32);
}
let celcius = converter(200)
console.log(celcius);
