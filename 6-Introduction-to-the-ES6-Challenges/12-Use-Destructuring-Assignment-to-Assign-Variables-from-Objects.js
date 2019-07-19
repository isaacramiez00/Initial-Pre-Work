//We can destruct object properties and assing properties to variables
/* syntax:
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54 //destruct all properties

const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
  //read as, "get the field x and copy value into a"
*/


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow: tempOfTomorrow } = AVG_TEMPERATURES; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
