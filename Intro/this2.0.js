// // In JavaScript, the this keyword refers to an object.

// // Which object depends on how this is being invoked (used or called).

// // The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

let x = this;
console.log(x)

let a = ()=>{
return this;
}
console.log(a);

function myFunction1() {
    return this;
    }
    console.log(myFunction1());

"use strict"
function myfunction(){
    return this;
    }
    console.log(myfunction());
    // It is undefined in strict version.




//     In HTML event handlers, this refers to the HTML element that received the event:

// Example
// <button onclick="this.style.display='none'">
//   Click to Remove Me!
// </button>


// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.


const person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName: "Shashwat",
    lastName: "Pandey",
}

console.log(person1.fullName.call(person2));

//Functin Borrowing
//With bind()

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName);


//   This Precedence
// To determine which object this refers to; use the following precedence of order.

// Precedence	Object
// 1	bind()
// 2	apply() and call()
// 3	Object method
// 4	Global scope
// Is this in a function being called using bind()?

// Is this in a function being called using apply()?

// Is this in a function being called using call()?

// Is this in an object function (method)?

// Is this in a function in the global scope.
    