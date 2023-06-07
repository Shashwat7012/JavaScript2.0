// Real Life Objects, Properties, and Methods
// A car has properties like weight and color, and methods like start and stop

// Objects are same like variables but it can store many values

const car = {type:"Luxary", model:"500", color:"blue" };
car.budget = "5000000";
console.log(car);


// Object Methods
// Objects can also have methods.

// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.
// A method is a function stored as a property.


const person ={
    firstName:{
        names:"Shashwat",
        agee:"19"
    },
    lastName: "Pandey",
    age: "19",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }

};
console.log(person.firstName);
