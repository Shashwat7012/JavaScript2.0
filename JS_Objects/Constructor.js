function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("Kaushal", "Pandey", 50, "black");
  console.log(myFather);



//   Object Types (Blueprints) (Classes)
// The examples from the previous chapters are limited. They only create single objects.

// Sometimes we need a "blueprint" for creating many objects of the same "type".

// The way to create an "object type", is to use an object constructor function.

// In the example above, function Person() is an object constructor function.

// Objects of the same type are created by calling the constructor function with the new keyword:
const myMother = new Person("Ranjana","Pandey",49,"black");
console.log(myMother);




// Use string literals "" instead of new String().

// Use number literals 50 instead of new Number().

// Use boolean literals true / false instead of new Boolean().

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().
