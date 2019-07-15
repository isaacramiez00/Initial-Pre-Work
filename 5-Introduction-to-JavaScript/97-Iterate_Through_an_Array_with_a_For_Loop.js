//We can iterate through idx of arrays
//Remember that arrays have zero-base idx; thus, last index is length - 1;
//thus use: arr.length

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for(var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
