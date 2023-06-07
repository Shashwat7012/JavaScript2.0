// async makes a function return a Promise

// await makes a function wait for a Promise


// async function myFunction() {
//     return "Hello";
//   }
//   Is the same as:
  
//   function myFunction() {
//     return Promise.resolve("Hello");
//   }

 function display(value){
    document.getElementById("demo").innerHTML = value
}
async function name1 (){
    return "Shashwat Pandey"
}
name1().then(
    function(value) {display(value);},
    function(error) {display(error);}
  );




  //Await Syntax
//   The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// let value = await promise;

async function mydisplay(){
    let Promise1 = new Promise(function(resolve,reject)
    {
        resolve("Raj!!!!");
    });
    document.getElementById('Rishabh').innerHTML = await Promise1;
}

mydisplay();
