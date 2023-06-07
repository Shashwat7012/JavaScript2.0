// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

const a = {
    f:"Shashwat",
    l:"Pandey",
};
console.log(a.f + " " + a.l);


// loop
txt = ""
for ( let x in a){
    txt +=  a[x] + " ";
}
console.log(txt);
// a.x will not work because x is a variable
// we must use a[x]


// Objects.values()
let v = Object.values(a);
console.log(v);


// // Using JSON.stringify()
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
let s = JSON.stringify(a);
console.log(s);


//Stringify Dates
const person = {
    name: "John",
    today: new Date()
  };
  
  let myString = JSON.stringify(person);
  console.log(myString);



  //JSONstringify() will not strigify objects.
  // To solve this we have to convert functions into string brfore stringifying.
  const h = {
    name: "Shashwat",
    age: function(){
        return 19;
    }
  };
  h.age = h.age.toString();
   let l = JSON.stringify(h);
   console.log(l);

//    Stringify Arrays
// It is also possible to stringify JavaScript arrays:

// Example
const arr = ["John", "Peter", "Sally", "Jane"];

let myStringg = JSON.stringify(arr);
console.log(myStringg);
