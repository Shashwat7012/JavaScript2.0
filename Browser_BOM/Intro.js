// // // The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

// // The window object is supported by all browsers. It represents the browser's window.

// // All global JavaScript objects, functions, and variables automatically become members of the window object.

// // Global variables are properties of the window object.

// // Global functions are methods of the window object.

// // Even the document object (of the HTML DOM) is a property of the window object:

// // window.document.getElementById("header");
// // is the same as:

// // document.getElementById("header");
// document.getElementById('demo').innerHTML = navigator.onLine;
// document.getElementById('demo1').innerHTML = navigator.javaEnabled();






// // How to Stop the Execution?
// // The clearTimeout() method stops the execution of the function specified in setTimeout().

// // window.clearTimeout(timeoutVariable)
// // The window.clearTimeout() method can be written without the window prefix.

// // The clearTimeout() method uses the variable returned from setTimeout():

// // myVar = setTimeout(function, milliseconds);
// // clearTimeout(myVar);
// // If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:
// let t = document.getElementById("demo2")
// t.addEventListener("click",myFumction)

// function myFunction(){
//     alert("Hii Shashwat");
// }
// let r = document.getElementById("demo3")
// r.addEventListener("click",myFunction2)
// function myFumction2(){
//     clearTimeout(s)
// }



// What are Cookies?
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies are saved in name-value pairs like:
