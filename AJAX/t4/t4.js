"use strict";

/*
Generic Fetch Function. Create a reusable async function that abstracts the Fetch API usage and handles errors.

Define an async function named fetchData that takes two parameters: url and options.

Use the Fetch API with async/await to make a request to the specified url with the provided options.

If the response is not successful (status code other than 2xx), throw an error with an appropriate message.

Return the response as a JSON promise if successful. 

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Error, status code: ", response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Response error: ", error);
  }
} */

async function fetchFunction() {
  try {
    const user = {
      name: "Karri",
      job: "Tyhjäntoimittaja",
    };
    const url = "https://reqres.in/api/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

