// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

// class className{
//     constructor(){...arguments.}
// }

class Carrrr {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

//   The example above creates a class named "Car".

// The class has two initial properties: "name" and "year".

// A JavaScript class is not an object.

// It is a template for JavaScript objects.
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  const date = new Date();
  let year = date.getFullYear();
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML=
  "My car is " + myCar.age(year) + " years old.";
  