setTimeout(change,1000)
function change(){
    let element =   document.getElementById("demo");
    element.innerHTML = "Shashwat Pandey";
    element.style.color = "red";
}
let el = document.getElementById("click");
el.addEventListener("click",date);
function date()
{
     document.getElementById("click").innerHTML = new Date();

}
// The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.

// Event Bubbling or Event Capturing?
// There are two ways of event propagation in the HTML DOM, bubbling and capturing.

// Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

// In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

// In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

// With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

// addEventListener(event, function, useCapture);
