// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.

// The JavaScript apply() Method
// The apply() method is similar to the call() method (previous chapter)

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Shashwat",
    lastName: "Pandey"
  }
  
 
  person.fullName.apply(person1)


//   The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"]);



//Math.max()
let b;
let a = Math.max.apply(b,[1,2,3]);
console.log(a);