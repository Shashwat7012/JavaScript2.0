// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

while (i < 10) {
    text += "The number is " + i;
    i++;
  }

  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);

//   The break statement "jumps out" of a loop.

// The continue statement "jumps over" one iteration in the loop.
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }
  console.log(i);

  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }

  // labels
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

document.getElementById("demo").innerHTML = text;
