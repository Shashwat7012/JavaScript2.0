const a  = newXMLHttpRequest();
a.onload = function(){
    const b = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name
}
a.open("GET","json_demo.txt");
a.send();


// Array as JSON
// When using the JSON.parse() on JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

// Example
// JSON returned from a server as an array:

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myArr[0];
  }
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();