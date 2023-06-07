// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished


// Sequence
function hii() {
    return("hi");
}
function hlo() {
    return("hlo");
}
console.log(hlo());
console.log(hii());


//Seqence control
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  console.log(result);