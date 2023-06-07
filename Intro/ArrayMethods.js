// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()

const fruits = ["Banana", "Orange", "Apple", "Mango" ];
let length = fruits.length;
console.log(length);
let x = fruits.toString();
console.log(x);
let xx = fruits.join(" + ");

console.log(xx);
fruits.pop();
console.log(fruits);
fruits.push("Guava");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Lemon");
console.log(fruits);

// use only pop or shift instead of delete bcz it creates an hole.
delete fruits[0];

console.log(fruits);

// concat new array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildrenss = arr1.concat(arr2, arr3);


const arr12 = ["Emil", "Tobias", "Linus"];
const myChildrensss = arr1.concat("Peter"); 



// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// Example
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

const fruitsx = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:


const fruitsp = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
// here no holes will create and all 1st elment will remove




// Slice

// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):

// Example
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);


// Sorting and find lowest number in array.
//So, there is no such technique to find lower and highest.so we have to sort it.

const a = [22,33,1,4,6];
let b = a.sort();
let c = a[0];
console.log(c);


// Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:

// Example
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
 }

 // math.min() is the way to find minmum array elememnt.