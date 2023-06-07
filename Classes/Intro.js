// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

// Syntax
// class ClassName {
//   constructor() { ... }
// }


class friends {
    constructor(name,age){
        this.firstName = name;
        this.age = age;
    }
}


// A JavaScript class is not an object.

// It is a template for JavaScript objects.
const friend  = new friends("Shashwat",19);
const friend1 = new friends("Rishabh",19);
let a = friend.firstName + " " + friend1.firstName;
console.log(a);

//3-4 topics are remaining
