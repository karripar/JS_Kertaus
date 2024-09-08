"use strict";

import { restaurantRow } from "./components.js";
import { restaurantModal } from "./components.js";
import {fetchData} from "./utils.js";
import {apiURL, fetchError} from "./variables.js";
const target = document.querySelector("tbody");
const modal = document.querySelector("dialog");
const info = document.querySelector("#info");
const closeModal = document.getElementById("close-modal");
const errorMessage = document.querySelector(".error-message");

(async () => {
  try {
  const restaurants = await fetchData(apiURL + "/api/v1/restaurants/");

  const filtered = restaurants.filter(
    ({ company }) => company === "Sodexo" || company === "Compass Group"
  );

  filtered.sort((a, b) => a.name.localeCompare(b.name)); // Sort the restaurants by name (alphabetically)

  closeModal.addEventListener("click", () => {
    modal.close();
  });

  filtered.forEach((restaurant) => {
    if (restaurant) {
      const row = restaurantRow(restaurant);
      const {_id} = restaurant;

      row.addEventListener("click", async () => {
        try {
        const dailyMenuUrl = `${apiURL}/api/v1/restaurants/daily/${_id}/fi`;

        const dailyMenu = await fetchData(dailyMenuUrl); // Fetch the daily menu for the selected restaurant
        console.log(dailyMenu);
        console.log(restaurant);

        // Remove existing highlights
        const highlights = document.querySelectorAll(".highlight");
        highlights.forEach((highlight) => {
          highlight.classList.remove("highlight");
        });

        // Highlight the selected row
        row.classList.add("highlight");
        modal.showModal();

        const restaurantHTML = restaurantModal(restaurant, dailyMenu);

        // Update the info section
        info.innerHTML = "";
        info.insertAdjacentHTML("beforeend", restaurantHTML);
      } catch (error) {
        console.error('Error fetching the menu.', error)
        modal.showModal();
        info.innerHTML = fetchError;
      }
      });

      // Append row to the target element
      target.append(row);
    }
  });
} catch (error) {
  console.error("Error in restaurant fetch", error)
  modal.showModal
  errorMessage.innerHTML = fetchError;
}
})();
