"use strict";

let counter;
const numbers = [0];

init();
function init() {
  counter = 0;
  loop();
}

function loop() {
  //console.log(counter);
  counter++;
  numbers.unshift(counter);

  if (counter > 7) {
    numbers.length = 9;
  }

  console.log(numbers);
  setTimeout(loop, 800);
}
