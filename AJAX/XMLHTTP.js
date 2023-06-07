// // // The keystone of AJAX is the XMLHttpRequest object.

// // // Create an XMLHttpRequest object
// // // Define a callback function
// // // Open the XMLHttpRequest object
// // // Send a Request to a server


// // The XMLHttpRequest Object
// // All modern browsers support the XMLHttpRequest object.

// // The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


// Create an XMLHttpRequest Object
// All modern browsers (Chrome, Firefox, IE, Edge, Safari, Opera) have a built-in XMLHttpRequest object.

// Syntax for creating an XMLHttpRequest object:


const a  = newXMLHttpRequest();


//Callback Function
// A callback function is a function passed as a parameter to another function.

// In this case, the callback function should contain the code to execute when the response is ready.
xHttpRequest.onload = function(){

}

xHttpRequest.open("GET","ajax_info.txt");
xHttpRequest.send();

const b = XMLHttpRequest();
b.onload = function(){}
b.open("GET","ajax_info.text")
b.send();


//Onload property
xHttpRequest.onload = function(){
    document.getElementById("demo").innerHTML = this.responseText;
}

// The onreadystatechange Property
// The onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.
//This is Pending...................................................................