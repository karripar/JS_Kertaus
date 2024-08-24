"use strict";

/**Write a program that allows users to track and rate their favorite movies. The program should prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5. The program should store the user input in an array of objects using object literals. Once all the movie ratings have been entered, the program should sort the movies based on their ratings and determine the highest-rated movie. Finally, it should display the sorted list of movies and the highest-rated movie on the HTML document.

Use object literals to represent each movie, with properties such as title and rating.
Prompt the user to enter the number of movies they want to rate.
Use a loop to gather user input for each movie, including the title and rating. Store the movie details in an array of objects.
Sort the array of movie objects based on the ratings, from highest to lowest.
Determine the highest-rated movie by accessing the first element of the sorted array.
Display the sorted list of movies and the highest-rated movie on the HTML document. */

let count = parseInt(prompt("How many movies do you want to rate?"));
const movies = [];

for (let i = 0; i < count; i++) {
  let title = prompt(`Enter the movie title #${i + 1}: `);
  let rating = parseFloat(
    prompt(`Enter a rating for '${title}' on a scale of 1 to 5:`)
  );

  let film = { title: title, rating: rating };
  movies.push(film);
}

movies.sort((a, b) => b.rating - a.rating); // sort movies from highest to lowest (rating)
const highest = movies[0]; // highest rated movie

const list = document.querySelector(".list");

movies.forEach((movie) => {
  let item = document.createElement("div");
  item.innerHTML = `${movie.title}: ${movie.rating}/5`;
  list.appendChild(item);
});

let highestElement = document.querySelector(".highest");
highestElement.innerHTML = `Highest rated movie is: ${highest.title}, rating: ${highest.rating}/5.`;
