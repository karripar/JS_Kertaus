"use strict";

/**Write a program that prompts the user to enter a positive integer and generates a multiplication table up to that number using a for loop. The multiplication table displays the product of each pair of numbers from 1 to the entered number.
Your program should follow these steps:

Write JavaScript code that prompts the user to enter a positive integer using the prompt() function. Store the user's input in a variable.
Convert the user's input from a string to a number.
Use nested for loops to generate the multiplication table.
The outer loop will iterate from 1 up to the entered number, representing the rows of the table.
The inner loop will also iterate from 1 up to the entered number, representing the columns of the table.
Inside the nested loops, calculate the product of the current row and column values.
Display each product in a formatted way to create the multiplication table on the HTML document. */

const result = document.querySelector(".result");
const integer = parseInt(prompt("Provide a positive integer: "));

if (isNaN(integer) || integer < 0) {
  alert("Please provide a positive integer: ");
} else {
  let table = "<table>";

  for (let i = 1; i <= integer; i++) {
    table += "<tr>";
    for (let u = 1; u <= integer; u++) {
      table += `<td>${i * u}</td>`;
    }
    table += "</tr>";
  }
  table += "</table>";
  result.innerHTML = `Multiplication table: <br>${table}`;
}

/** Another way:
 * else {
    const table = document.createElement("table");

    for (let i = 1; i <= integer; i++) {
        const row = document.createElement("tr");

        for (let j = 1; j <= integer; j++) {
            const cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    result.appendChild(table);
}
 */