// // BigInt
// // String matchAll()
// // The Nullish Coalescing Operator (??)
// // The Optional Chaining Operator (?.)
// // Logical AND Assignment Operator (&&=)
// // Logical OR Assignment (||=)
// // Nullish Coalescing Assignment (??=)
// // Promise allSettled():
// // Promise.allSettled([prom1,prom2,prom3]).then {}
// // Dynamic Import




//Nullishing operator:-
// The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second.

let jk = null;
let text = "missing";
let result = jk ?? text;
console.log(result);


// The Optional Chaining Operator (?.)
const car = {type:"Fiat", model:"500", color:"white"};
let name1 = car?.name;
console.log(name1);



// The &&= Operator
// The Logical AND Assignment Operator is used between two values.

// If the first value is true, the second value is assigned.

let x = 10;
let a = x  &&= 5;
console.log(x);


// The ||= Operator
// The Logical OR Assignment Operator is used between two values.

// If the first value is false, the second value is assigned.
let y = 10;
let b = y ||= 5;
console.log(b);



// The ??= Operator
// The Nullish Coalescing Assignment Operator is used between two values.

// If the first value is undefined or null, the second value is assigned.

// Nullish Coalescing Assignment Example
let z = 10;
z ??= 5;
