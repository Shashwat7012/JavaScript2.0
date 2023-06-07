// All JavaScript objects inherit properties and methods from a prototype
//As we know we cannot add new property in object constructor.

// So we inherit it.
//Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

function Person(f,l,a,e){
    this.fN = f;
    this.LN = l;
    this.ag = a;
    this.ec = e;
}
Person.prototype.height = "5 ft"
let father = new Person("Kaushal","Pandey",50,"black");
console.log(father.height);
// It automatically inherited into new object.
