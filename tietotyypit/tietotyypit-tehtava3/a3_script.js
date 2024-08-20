"use strict";

// Write a program that prompts the user to enter the lengths of three sides of a triangle and determines the type of triangle based on the side lengths. The program should classify the triangle as equilateral (all sides are equal), isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document. Try to use &&, || and ! operators

const result = document.querySelector(".result");
const side1 = parseFloat(prompt("Provide the first side of the triangle: "));
const side2 = parseFloat(prompt("Provide the second side of the triangle: "));
const side3 = parseFloat(prompt("Provide the last side of the triangle: "));

console.log(side1, side2, side3);
if (
  isNaN(side1) ||
  isNaN(side2) ||
  isNaN(side3) ||
  side1 <= 0 ||
  side2 <= 0 ||
  side3 <= 0
) {
  result.innerHTML = "Invalid input, provide numbers greater than zero (0).";
} else if (side1 == side2 && side3 != side2) {
  result.innerHTML = "The triangle is an isosceles triangle.";
} else if (side2 == side3 && side2 != side1) {
  result.innerHTML = "The triangle is an isosceles triangle.";
} else if (side1 == side2 && side2 == side3) {
  result.innerHTML = "The triangle is an equilateral triangle.";
} else if (side1 != side2 && side2 != side3 && side3 != side1) {
  result.innerHTML = "The triangle is scalene.";
}
