// // // // // // JSON is a format for storing and transporting data.

// // // // // // JSON is often used when data is sent from a server to a web page.


// // // // // //  JSON?
// // // // // // JSON stands for JavaScript Object Notation
// // // // // // JSON is a lightweight data interchange format
// // // // // // JSON is language independent *
// // // // // // JSON is "self-describing" and easy to understand


// // // // // Data is in name/value pairs
// // // // // Data is separated by commas
// // // // // Curly braces hold objects
// // // // // Square brackets hold arrays

// // // // JSON Data - A Name and a Value
// // // // JSON data is written as name/value pairs, just like JavaScript object properties.

// // // // A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

// // // // "firstName":"John"



// // // JSON Arrays
// // // JSON arrays are written inside square brackets.

// // // Just like in JavaScript, an array can contain objects:

// // // "employees":[
// // //   {"firstName":"John", "lastName":"Doe"},
// // //   {"firstName":"Anna", "lastName":"Smith"},
// // //   {"firstName":"Peter", "lastName":"Jones"}
// // // ]
// // // In the example above, the object "employees" is an array. It contains three objects.

// // // Each object is a record of a person (with a first name and a last name).



// // Converting a JSON Text to a JavaScript Object
// // A common use of JSON is to read data from a web server, and display the data in a web page.

// // For simplicity, this can be demonstrated using a string as input.

// // First, create a JavaScript string containing JSON syntax:

// // let text = '{ "employees" : [' +
// // '{ "firstName":"John" , "lastName":"Doe" },' +
// // '{ "firstName":"Anna" , "lastName":"Smith" },' +
// // '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

// const obj = JSON.parse(text);

// const obj = JSON.parse(text);

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);

let a = obj.employees[1].firstName + " " + obj.employees[1].lastName;
 console.log(a);


//  Don't Use new Object()
// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()


// The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.

// Because it allows arbitrary code to be run, it also represents a security problem.
