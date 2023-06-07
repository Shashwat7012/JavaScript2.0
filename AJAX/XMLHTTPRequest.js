// // The XMLHttpRequest object is used to request data from a server.
// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

xHttpRequest.open("GET","ajax_info.text,", true);
xHttpRequest.send();

// Method	Description
// open(method, url, async)	Specifies the type of request

// method: the type of request: GET or POST
// url: the server (file) location
// async: true (asynchronous) or false (synchronous)
// send()	Sends the request to the server (used for GET)
// send(string)	Sends the request to the server (used for POST)


// The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).



// Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

// Modern developer tools are encouraged to warn about using synchronous requests and may throw an InvalidAccessError exception when it occurs.

