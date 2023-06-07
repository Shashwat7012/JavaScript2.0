// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.



// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set



// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables



const a = new Set(["a","b","c"]);
console.log(a.size);

const b = new Set();
b.add("a");
b.add("b");
b.add("c");
console.log(b);

//add variables
const z = 10;
const c = 20;
const s= 30;
const p= 40;

const fg = new Set();
fg.add(z);
fg.add(c);
fg.add(s);
fg.add(p);
console.log(fg);



const o = 10;
const u = 10;
const y= 10;
const r= 10;

const fg1 = new Set();
fg1.add(o);
fg1.add(u);
fg1.add(y);
fg1.add(r);
console.log(fg1);
//Through it we cannot repeat the element.


const letters = new Set(["a","b","c"]);
 
let txt = "";
letters.forEach (function(v){
        txt += v;
})
console.log(txt);

