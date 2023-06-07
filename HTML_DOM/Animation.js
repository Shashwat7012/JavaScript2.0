
const elm =
 document.getElementById("demoo");
 elm.addEventListener("click",Move);
function Move()
{
    let id = null;
    const elem = document.getElementById("animated");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + "px";
        }
    }
}

