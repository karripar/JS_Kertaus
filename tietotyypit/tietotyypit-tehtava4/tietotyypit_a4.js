'use strict';

// Write a program that prompts the user to enter their score for a course assessment and determines their grade based on the following grading scale:
// Scores between 0 and 39 receive a grade of 0.
//Scores between 40 and 51 receive a grade of 1.
//Scores between 52 and 63 receive a grade of 2.
//Scores between 64 and 75 receive a grade of 3.
//Scores between 76 and 87 receive a grade of 4.
//Scores between 88 and 100 receive a grade of 5.
//Print the result on the HTML document.
//3p


const score = prompt("Provide the course assessment score: ")
const result = document.querySelector(".result");
if (isNaN(score) || score < 0 || score > 100) {
    result.innerHTML = "Invalid input, provide a proper value. Maximum result is 100 points.";
} else if (score > 0 && score <= 39) {
    result.innerHTML = "You received a grade of 0 (out of 5)"
} else if (score >= 40 && score <= 51) {
    result.innerHTML = "You received a grade of 1 (out of 5)"
} else if (score >= 52 && score <= 63 ) {
    result.innerHTML = "You received a grade of 2 (out of 5)"
} else if (score >= 64 && score <= 75) {
    result.innerHTML = "You received a grade of 3 (out of 5)" 
} else if (score >= 76 && score <= 87) {
    result.innerHTML = "You received a grade of 4 (out of 5)" 
} else if (score >= 88 && score <= 100) {
    result.innerHTML = "You received a grade of 5 (out of 5)" 
} 
