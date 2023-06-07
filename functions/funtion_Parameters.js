// // // A JavaScript function does not perform any checking on parameter values (arguments).
// // Function parameters are the names listed in the function definition.


// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the passed arguments.

// JavaScript functions do not check the number of arguments received.


function p(x,y){
    if(y === undefined) {
        y = 2;
    }
    
        return x*y;
    
}
let x = p(4);
console.log(x);

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
//  const y = [4,5,6,7];
//  let f = y.reduce((x,y)=>{
//     return x+y;
//  })
//  console.log(f);

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args){
    let sum = 0;
        for(let arg of args) sum += arg; 
        return sum;
    
}
let r = sum(4,5,6,7,8,4,3,23,45,67);
console.log(r);

let g = sumAll(1, 123, 500, 115, 44, 88);
function sumAll(){
    let sum = 0;
    for(let i = 0;i< arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(g);



//this
const  myObject = {
    firstName : "Shashwat",
    lastName : "Pandey",
    fullName : function (){
        return this;
    }
  
}
console.log(myObject.fullName);
console.log(typeof(myObject));




//Invoking a Function with a Function Constructor
// If a function invocation is preceded with the new keyword, it is a constructor invocation.

// It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:
