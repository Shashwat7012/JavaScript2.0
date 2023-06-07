// // "Producing code" is code that can take some time

// // "Consuming code" is code that must wait for the result

// // A Promise is a JavaScript object that links producing code and consuming code


// // When the producing code obtains the result, it should call one of the two callbacks:

// // Result	Call
// // Success	myResolve(result value)
// // Error	myReject(error object)


// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.


alert("hii");
function display(value){
    document.getElementById("demo").innerHTML = value

}
let myPromise = new Promise(function(resolve,reject){
    let x=0;
    if(x==0){
        resolve("ok");

    }
    else{
        reject("wrong");
    }
})
myPromise.then(
    function(x){
        display(x);
    },
    function(error){
        display(error);
    }
)

async function myDisplay(value){
    document.getElementById("d1").innerHTML = value;
}
let Promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){resolve("Shashwat Pandey")},1000)
})
Promise1.then(
    function(value){
        myDisplay(value);
    }
)
