"use strict";

/**Write a program that prompts the user to enter a positive integer and calculates the sum of all the natural numbers up to and including that integer using a for loop. The program should display the sum on the HTML document.
Natural numbers are positive integers used for counting and representing quantities. Let's consider the example of the number 5. When the user enters 5, the program will calculate the sum of all the natural numbers up to and including 5. In this case, the natural numbers are 1, 2, 3, 4, and 5. The program will use a for loop to iterate through each of these numbers and add them together. Finally, the program will display the sum, which in this case would be 15, on the HTML document.
3p
 */

const result = document.querySelector(".result");
const value = parseInt(prompt("Provide an integer: "));
let sum = 0;
if (isNaN(value) || value < 0) {
  result.innerHTML = "Not a valid integer";
} else {
  for (let i = 1; i <= value; i++) {
    console.log(i);
    sum += i;
  }
  result.innerHTML = `Sum of natural numbers up to the input: ${sum}`;
}
