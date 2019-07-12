//"queue is an abstract data structure where items are kept in order." (freeCodeCamp)
//"Added items are set to the back of the queue and old items are taken off fromt the front of queue"(freeCodeCamp)
//The function below is an example of a queue


function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var num = arr.shift();
  return num;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
