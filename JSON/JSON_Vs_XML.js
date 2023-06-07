// Both JSON and XML can be used to receive data from a web server.

//JSON format

{"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
  ]}


  // XML format

//   <employees>
//   <employee>
//     <firstName>John</firstName> <lastName>Doe</lastName>
//   </employee>
//   <employee>
//     <firstName>Anna</firstName> <lastName>Smith</lastName>
//   </employee>
//   <employee>
//     <firstName>Peter</firstName> <lastName>Jones</lastName>
//   </employee>
// </employees>



// JSON is Like XML Because
// Both JSON and XML are "self describing" (human readable)
// Both JSON and XML are hierarchical (values within values)
// Both JSON and XML can be parsed and used by lots of programming languages
// Both JSON and XML can be fetched with an XMLHttpRequest


// JSON is Unlike XML Because
// JSON doesn't use end tag
// JSON is shorter
// JSON is quicker to read and write
// JSON can use arrays



// XML is much more difficult to parse than JSON.
// JSON is parsed into a ready-to-use JavaScript object.


// For AJAX applications, JSON is faster and easier than XML:

// Using XML

// Fetch an XML document
// Use the XML DOM to loop through the document
// Extract values and store in variables
// Using JSON


// Fetch a JSON string
// JSON.Parse the JSON string





