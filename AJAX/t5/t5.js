"use strict";

const apiURL = "https://media1.edu.metropolia.fi/restaurant";
const target = document.querySelector("tbody");
const modal = document.querySelector("dialog");
const info = document.querySelector("#info");
const closeModal = document.getElementById("close-modal");

async function fetchRestaurants() {
  const restaurants = await fetchData(apiURL + "/api/v1/restaurants/");

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  closeModal.addEventListener("click", function () {
    modal.close();
  });

  for (const restaurant of restaurants) {
    if (restaurant) {
      const name = document.createElement("td");
      name.innerText = restaurant.name;

      const phone = restaurant.phone && restaurant.phone.trim() !== "-" ? restaurant.phone : " Ei puhelinnumeroa.";

      const address = document.createElement("td");
      address.innerText = restaurant.address;

      const row = document.createElement("tr");
      
      row.addEventListener("click", async function () {
        const dailyMenuUrl = `${apiURL}/api/v1/restaurants/daily/${restaurant._id}/fi`;
        const dailyMenu = await fetchData(dailyMenuUrl);
        console.log(dailyMenu);
        console.log(restaurant);
        
        let listHTML = ``;
        for (const course of dailyMenu.courses) {
          const name = course.name.trim();
          const price = course.price ? course.price : "Hinta ei saatavilla.";
          const diets = course.diets.join(", ");
          listHTML += `<li>Ruokalaji: ${name} Hinta: ${price}<br><em> Allergiatiedot:</em> ${diets}<br><br></li>`;
        }
      
        // Remove existing highlights
        const highlights = document.querySelectorAll(".highlight");
        for (const highlight of highlights) {
          highlight.classList.remove("highlight");
        }
        
        // Highlight the selected row
        row.classList.add("highlight");
        modal.showModal();
        
        const restaurantHTML = `
        <header>
          <h3 class="restaurant-name">${restaurant.name}</h3>
          <p>${restaurant.company}</p>
        </header>
        <address>
          ${restaurant.address}<br>
          ${restaurant.postalCode} ${restaurant.city}<br>
          <i class="fa-solid fa-phone"></i> :${phone}<br>
        </address>
        <div>
          <h3>Päivän ruokalista: </h3>
          <ul class="menu-list">${listHTML}</ul>
        </div>`;
        
        // Update the info section
        info.innerHTML = "";
        info.insertAdjacentHTML("beforeend", restaurantHTML);
      });
      
      // Append row to the target element
      row.append(name, address);
      target.append(row);

      row.append(name, address);
      target.append(row);
    }
  }
}

fetchRestaurants();
