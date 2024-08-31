'use strict';

/* GET Method. Practice using the Fetch API with async/await to make a GET request and log the response.

Utilize the Fetch API with async/await to make a GET request to the URL https://reqres.in/api/users/1.
Log the response data to the console. */

async function getReqres() {
    const response = await fetch('https://reqres.in/api/users/1');
    const data = await response.json();
    console.log(data)
}

getReqres();