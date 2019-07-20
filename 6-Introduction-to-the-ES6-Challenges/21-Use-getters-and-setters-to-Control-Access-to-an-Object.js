//getter functions: allow us to "return(get) the value of an objects variable"(FCC)
//setter functions: allow us to change(set) the value of an objects based on the value passed
//Like attributes
//getters and setters allow us to hide internal implementation details
//getters and setters allows us to create an API for another user
//help applications communicate with each other



function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }

    //getter
    get temperature(){
      return 5/9 * (this.fahrenheit - 32);
    }

    //setter
    set temperature(celsius){
      this.fahrenheit = (celsius * 9.0) / (5 + 32);
    }

  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
