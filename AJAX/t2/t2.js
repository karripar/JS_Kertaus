'use strict';

/*
POST Method. Practice making a POST request using the Fetch API with async/await and handling the response.

Make a POST request to the URL https://reqres.in/api/users with a JSON payload containing user information ( e.g., name and job).
Log the response data to the console.
*/

async function postFunction(name, job) {
    const user = {
        name: `${name}`,
        job: `${job}`
    }

    const url = 'https://reqres.in/api/users'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    const response = await fetch(url, options);
    const userData = await response.json();
    console.log(userData);
}

postFunction('Karri', 'Tyhjäntoimittaja');