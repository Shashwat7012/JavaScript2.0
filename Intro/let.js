// It is part of ES6
// It cannot be redecared.
// must be declare before.
// It has also a block scope.

// let x = "john";
// // let x = 0 ;
// // it is wrong

// function a{
//     let b = 2;
//     console.log(b);
// }
// let b = 3;
// console.log(b);
// It canot work
// we can redeclare the varible outside the block

let a=10;
{
    let a=2;
}
console.log(a);
// it will return 10
// but in var it will return 2
let b=2;
b=3;
console.log(b);
// can be reassign
