// // JavaScript Accessors (Getters and Setters)
// // ECMAScript 5 (ES5 2009) introduced Getter and Setters.

// // Getters and setters allow you to define Object Accessors (Computed Properties).

// JavaScript Getter (The get Keyword)
const a = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get b(){
        return a.lastName;
    }
};
console.log(a.b);

// Setter :- To set a property
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(l) {
      this.language = l;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "hn";
  console.log(person.language);

  //Object define property