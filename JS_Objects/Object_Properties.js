// // JavaScript Properties
// // Properties are the values associated with a JavaScript object.

// // A JavaScript object is a collection of unordered properties.

// // Properties can usually be changed, added, and deleted, but some are read only.



// objectName.property      // person.age
// or

// objectName["property"]   // person["age"]
// or

// objectName[expression]   // x = "age"; person[x]

const a = {};
a.name = "Shashwat";
a.age = "19"
let b = a.name + " is " + a.age + " years old";
console.log(b);
let c = a["name"] + " is " + a["age"] + " years old";
console.log(c);


let txt = '';
// for..in loop
for (let x in a){
    txt +=   a[x] + " ";
}
console.log(txt);


// adding new properties in defined object


a.nationality = "hindi";
console.log(a)


// delete Properties;
delete a.name;
console.log(a);



// Nested Objects
myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.cars.car1);


  //Nested Arrays
  const myObj2 = {
    name: "John",
    age: 30,
    cars2: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


  //Prototype
//   JavaScript objects inherit the properties of their prototype.

// The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

