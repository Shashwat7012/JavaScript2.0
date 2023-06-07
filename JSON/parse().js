// JSON.parse()
// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.


// Imagine we received this text from a web server:

'{"name":"John", "age":30, "city":"New York"}'
// Use the JavaScript function JSON.parse() to convert text into a JavaScript object:

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);


// Array as JSON
// When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

// Example
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr)



//Exceptional case:-
const text1 = '{"name":"John", "birth":"2023-12-14", "city":"New York"}';
const obj1 = JSON.parse(text1);
obj1.birth = new Date(obj.birth);
console.log(obj1)

// You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.

