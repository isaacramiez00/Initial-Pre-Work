//we can pass an optional second arg in parseInt(str, radix); radix = specified base;
//radix is an int between 2 and 36;
//May not convert the str to be exact and will modify base on radix value

function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("5345215"));
