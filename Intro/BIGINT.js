// To create a BigInt, append n to the end of an integer or call BigInt()
let x = 9999999999999999;
let y = 9999999999999999n;
//or 
let z = BigInt(9999999999999999999999999999);
console.log(z);
let yy = typeof z;
console.log(yy);

// BigInt is the second numeric data type in JavaScript (after Number).

// With BigInt the total number of supported data types in JavaScript is 8:

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object