//We can use the default statement if no case statement are true
/* syntax for switch-case statements:
      switch(val) {
        case value1:
          code to execute;
          break;
        case value2:
          code t0 execute;
          break;
        ...
        default:
          default code to execute;
          break;
      }
  */

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
