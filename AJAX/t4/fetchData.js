"use strict";

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Error, status code: ", response.status);
  }
  const data = await response.json();
  return data;
}
