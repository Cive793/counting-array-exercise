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
  console.log(numbers);
  setTimeout(loop, 800);

  if (counter > 7) {
    numbers.length = 8;
  }
}
