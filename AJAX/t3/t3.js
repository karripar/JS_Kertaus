"use strict";

/*
Error Handling. Practice error handling while using the Fetch API

Attempt to make a GET request to a non-existent URL (e.g., https://reqres.in/api/unknown/23).
Handle the error using try/catch blocks.
Also try other methods (POST, PUT, DELETE)
Log an error message to the console in case of an error. */

async function dummyRequest(options) {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23", options);
    if (response.status != 200) {
        throw new Error('Error in status: ', response.status)
    }
    const data = await response.json();
    console.log("response:", data);
  } catch (error) {
    console.log("Response error: ", error);
  }
}

console.log("GET method: ");
dummyRequest({ method: "GET" });

console.log("------------------------------------------------");
console.log("POST method: ");
dummyRequest({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Karri", job: "Tyhjäntoimittaja" }),
});

console.log("----------------------------------------------");
console.log("Delete request: ");
dummyRequest({ method: "DELETE" });
