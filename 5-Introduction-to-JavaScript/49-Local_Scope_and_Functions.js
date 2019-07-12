//local scope are variables declared inside a function; local scope variables cannot be called outside of function()

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Hi";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
