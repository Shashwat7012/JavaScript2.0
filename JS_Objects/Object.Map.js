// Method	Description
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map



// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()


const m = new Map([
    ["apples",500],
    ["bananas",900]
])
console.log(m);

const r = new Map();
r.set("apples",800)
r.set("bananas",700);
console.log(r);
let b = r.get("apples");
console.log(b);
