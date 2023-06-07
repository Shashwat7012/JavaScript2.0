for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }


//   Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:


//For of
let lang = "Javascript";
let txt = "";
for(let x of lang){
    txt += x;
}
console.log(txt);


// While loop 

// const name = ["shashwat","Pandey"];
// while(name[i]){
//     let n = name[i];
//     i++;
// }
// console.log(n);