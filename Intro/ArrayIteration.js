// Array iteration methods operate on every array item
const arr = [4,5,6,7,8];
let txt = "";
arr.forEach(myFunction);
function myFunction(value){
        txt+= value + 12 + "   ";
}
console.log(txt);