// ES6
// Cannot be redeclared
// cannot be reassigned
// have block scope

// It cannot be reassign
const a = 3;
a=4;
// cosole.log(a);
// this will give an error
// Must be assigned
// const a;
a=3; // this wrong

/*
when we have to use const
1. when we know that the value will not change
use const when you declare
1. A new array
2. A new object
3. A new function
*/

// we can change the constant elements of array
// we can change the properties of constnat object.
// 1. changing elements of array
const cars = ["Saab", "volvo" , "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);

// but we cannot reassign the array
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
 // 2. :- We can chnage properties of an object
 const car = {type:"fiat",model:"500", color:"white"};
 car.color = "red";
 car.owner = "jhonson";

 
 const x =10;
 {
    const x = 2;
 }
console.log(x);

// It can be hoisted on the top but not initiialized
carName = "Volvo";
var carName;