"use strict";

/**Write a JavaScript program that focuses on the basic concepts of arrays. Your program should include the following requirements:

Create an array called fruits and initialize it with the following elements: "apple", "banana", "orange", " grape", "kiwi".
Display the contents of the fruits array in the console.
Calculate and display the length of the fruits array.
Access and display the element at index 2 in the fruits array in the console.
Access and display the last element in the fruits array using the length property in the console.
Create an empty array called vegetables.
Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
Display the contents of the vegetables array in the console.
Calculate and display the length of the vegetables array. */

const fruits = ["Apple", "Banana", "Orange", "Grape", "Kiwi"];
console.dir(`Fruits: ${fruits}`);
console.log(`Length of Fruits: ${fruits.length}`);
console.log(`Element at Index 2: ${fruits[2]}`);
console.log(`Last element of Fruits: ${fruits[fruits.length - 1]}`);
const vegetables = [];
for (let i = 0; i < 3; i++) {
  vegetables.push(prompt("Enter a name of a vegetable: "));
}
console.dir(`Vegetables: ${vegetables}`);
console.log(`Length of Vegetables: ${vegetables.length}`);
