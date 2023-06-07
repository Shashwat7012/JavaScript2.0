// // JavaScript Maps
// // A Map holds key-value pairs where the keys can be any datatype.

// // A Map remembers the original insertion order of the key.
// // const j=()=>{
// //     console.log("Pandey")
// // }

// // const i = new Promise(()=>{
// //     console.log('shashwat')    
// // })
// // .then((data)=>{
// //     console.log(data)
// // })
// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
// size	Returns the number of elements in a Map





// To create a new map
const friendssss = new Map([
    ["Shashwat", 19],
    ["Rishabh", 19],
    ["Tiwari", 20],

]);
console.log(friendssss);

// To set :- Means to set the elements of maps.

const friends = new Map();
friends.set("Shashwat", 19);
friends.set("Rishabh",19);
console.log(friends);


//get()
const friendss = new Map([
    ["Shashwat", 19],
    ["Rishabh", 19],
    ["Tiwari", 20]
]);
let b = friends.get("Shashwat");
console.log(b);

// Size
let c = friends.size;
console.log(c)

// delete
 friends.delete("Shashwat");
 let d =  friends.size;
console.log(d);

// has
// The has() method returns true if a key exists in a Map:
let f = friends.has("Shshwat");
console.log(f);
// Output is false because we delete this key

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let txt = "";
  fruits.forEach((value,key)=>{
    txt += ", " + key + " " + ' = ' + " " + value;
  })
  console.log(txt);
  




    