// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

// Example
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

// let fullName = person.fullName.bind(member);


// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function
