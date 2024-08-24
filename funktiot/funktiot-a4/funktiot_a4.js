"use strict";

/**Create a function called sortArray that accepts an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.

No need to prompt for the numbers. Use a hard coded array. Use console.log to print the original array and the sorted array.
2p */

function sortArray(array) {
  const ascending = array.sort((a, b) => a - b);
  return ascending;
}

const numbers = [2, 42, 4, 64, 13, 12, 31, 21, 22, 100];

console.dir(`Original: ${numbers}`);

const sorted = sortArray(numbers);
console.dir(`Sorted (ascending): ${sorted}`);
