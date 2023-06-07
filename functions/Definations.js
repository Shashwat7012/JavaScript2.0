// JavaScript functions are defined with the function keyword.

// You can use a function declaration or a function expression.



//all previous topics of function is covered in intro js.


//funtion Constructor.
const myFunction = new Function("a","b","return a*b");
let x = myFunction(4,3);
console.log(x);

// Same as writting.
// const myFunction = function (a, b) {return a * b};

// let x = myFunction(4, 3);



//Function Hoisting
let x1= shashwat(5);
console.log(x1);
function shashwat(y){return y*y;}


let txt = myFunction.toString();
console.log(txt);


// Arrow Function:-
const g = (x,y)=>x*y;
console.log(g(7,9));

// Arrow functions do not have their own this. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:


