// // // With the HTML DOM, you can navigate the node tree using node relationships.
// // DOM Nodes
// // According to the W3C HTML DOM standard, everything in an HTML document is a node:

// // The entire document is a document node
// // Every HTML element is an element node
// // The text inside HTML elements are text nodes
// // Every HTML attribute is an attribute node (deprecated)
// // All comments are comment nodes


// Node Relationships
// The nodes in the node tree have a hierarchical relationship to each other.

// The terms parent, child, and sibling are used to describe the relationships.

// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent
// .................................index.html4................................................................................................
alert("hii");
let elm = document.getElementById("demo");
elm.addEventListener("click",colr);
function colr(){
    let collection  = document.getElementsByTagName("p")
    for(let i=0;i<collection.length;i++){
        collection[i].style.color = "blue"
    }
}
// An HTMLCollection is NOT an array!

// An HTMLCollection may look like an array, but it is not.

// You can loop through the list and refer to the elements with a number (just like an array).

// However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.

// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// The querySelectorAll() method returns a static NodeList.

// The childNodes property returns a live NodeList.
