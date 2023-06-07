// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

const person = {
    fullname: function(){
        return this.f + " " + this.l;
    }
}

const person1 = {
    f:"Shashwat",
    l:"Pandey"

}
const person2 = {
    f:"Rishabh",
    l:"Raj"
}
console.log(person.fullname.call(person1));

//call by arguments
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(person1, "Oslo", "Norway");

