// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()
alert("hii");
function Display (something)
{
   document.getElementById("demo").innerHTML = something;
}
function cal (num1,num2,sumcall){
 let sum = num1 + num2;
 sumcall(sum);
}


console.log(cal(5,2,Display));

//Display is related with demo id..index.html
function hii(){
    document.getElementById("timeout").innerHTML = "Hii, I'm Shashwat";
}
setTimeout(hii,2000);


// Note
// When you pass a function as an argument, remember not to use parenthesis.

// Right: setTimeout(myFunction, 3000);

// Wrong: setTimeout(myFunction(), 3000);


//Instead of that..we can doo
setTimeout(function(){
    myFunction("I'm Persuing B.tech right now");

},2000)
function myFunction(value){
    document.getElementById("t1").innerHTML=value;


}




//setInterval()
// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
setInterval(myFunction1,1000);

function myFunction1(){
    let d = new Date()
    document.getElementById("t2").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" + 
    d.getSeconds() ;

}

// Callback Alternatives
// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.

// But, asynchronus programmes are difficult to write and difficult to debug.

// Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.



