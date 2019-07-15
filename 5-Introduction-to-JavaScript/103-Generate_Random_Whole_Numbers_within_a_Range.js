//Math.floor gets the differnce + 1 of the max/min values then adds the min outside so it will never go under the min
//Math.floor() rounds down so that allows our random number to not go pass max
//Math.floor(Math.random() * (max - min + 1)) + min
//Both our min and max values are inclusive for the random number generator

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

}

// Change these values to test your function
var myRandom = randomRange(10, 20);
console.log(myRandom);
