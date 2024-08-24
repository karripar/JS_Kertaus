'use strict';

/**Write a JavaScript program that focuses on various array operations using the push(), includes(), pop(), and numerical sorting functions. Your program should include the following requirements:

Create an empty array called numbers.

Prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.

Display the contents of the numbers array on the HTML document or in the console.

Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.

Display a message indicating whether the entered number is found or not found in the numbers array.

Remove the last number from the numbers array using the pop() method.

Display the updated numbers array on the HTML document or in the console.

Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.

Display the sorted numbers array on the HTML document or in the console. */

const numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(parseInt(prompt(`Enter number ${i}: `)));
}
console.dir("Given numbers: ")
for (let number of numbers) {
    console.dir(number)
}

const number = prompt("Please enter a number to search: ");
if (numbers.includes(parseInt(number))) {
    console.dir("Number is already in the array.\n")
} else {
    console.dir("Number is NOT found in the array.\n")
}
numbers.pop()
console.log("Updated array with last element removed:'\n")
for (let number of numbers) {
    console.dir(number)
}

numbers.sort(function(a, b) {
    return a - b;
});
console.dir("Numerically sorted array: ");
for (let number of numbers) {
    console.dir(number)
}


