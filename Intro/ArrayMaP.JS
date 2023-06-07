// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

const a = [7,8,9,4,5,6];
const b = a.map(myfunction);
function myfunction(x){
    return x*2
}
console.log(b);
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const c = a.flatMap((value)=>value*3);
console.log(c);

// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

const d = a.filter(myfunction1);
function myfunction1(x){
    return x > 6
}
console.log(d)



// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

let e = a.reduce(myfunction2);
function myfunction2(x,y){
    return x+y;
}
console.log(e)

// reduceRight() :- works right to left


// JavaScript Array every()
// The every() method checks if all array values pass a test.

const f = a.every(pass)
function pass(x){
    return x > 3
}
console.log(f);


// JavaScript Array some()
// The some() method checks if some array values pass a test.
const t = a.some(gfti);
function gfti(x)
{
    return x>6;
}
console.log(t);


// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.
const h = a.indexOf(6) ;
console.log(h)


// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.
const j = a.find(myfuntion4);
function myfuntion4(x){
    return x > 8;
}
console.log(j)





// JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

// Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);




// const i=[
//     "rishabh",
//     "raj",
//     "Tarun"
// ]

// <ul>
//     {
//         i.map((j)=>{
//             return (<li>{j}</li>)
//         })
//     }

// </ul>