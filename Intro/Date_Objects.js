// // // Read index3.html
// // Note
// // Date objects are static. The "clock" is not "running".

// // The computer clock is ticking, date objects are not



// // Method	Description
// // getFullYear()	Get year as a four digit number (yyyy)
// // getMonth()	Get month as a number (0-11)
// // getDate()	Get day as a number (1-31)
// // getDay()	Get weekday as a number (0-6)
// // getHours()	Get hour (0-23)
// // getMinutes()	Get minute (0-59)
// // getSeconds()	Get second (0-59)
// // getMilliseconds()	Get millisecond (0-999)
// // getTime()	Get time (milliseconds since January 1, 1970)


// Note 1
// The get methods above return Local time.

// Universal time (UTC) is documented at the bottom of this page.

// Note 2
// The get methods return information from existing date objects.

// In a date object, the time is static. The "clock" is not "running".

// The time in a date object is NOT the same as current time.

const a = new Date();
a.getFullYear();
console.log(a);


// Warning !
// Old JavaScript code might use the non-standard method getYear().

// getYear() is supposed to return a 2-digit year.

// getYear() is deprecated. Do not use it!


// Note
// In JavaScript, January is month number 0, February is number 1, ...

// Finally, December is month number 11.

const d = new Date();
d.getMonth()+1;
console.log(d);
