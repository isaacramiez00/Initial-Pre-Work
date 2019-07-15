//We can pass multiple if/else conditions in a ternary/conditional operator
/*
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
*/
//best practice to include parenthesis in conditional statements ()

function checkSign(num) {
  return (num > 0) ? "positive" : (num == 0) ? "zero" : "negative";
}

console.log(checkSign(10));
