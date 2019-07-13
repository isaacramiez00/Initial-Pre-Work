//strict equality operator compares data type and values
//equality operator can compare differ data type
//typeof command returns the data type of variable/value

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
