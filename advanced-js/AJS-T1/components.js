'use strict';

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Error, status code: ', response.status);
  }
  const data = await response.json();
  return data;
};


const restaurantRow = (restaurant) => {
  const {name, address} = restaurant;
  const row = document.createElement('tr');

  const nameData = document.createElement('td');
  nameData.innerText = name;
  const addressData= document.createElement('td');
  addressData.innerText = address;

  row.append(nameData, addressData);

  return row;
};


const restaurantModal = (restaurant, menu) => {
  const {name, company, address, city, postalCode, phone} = restaurant;
  const {courses} = menu;
  let menuHTML = ``;
  courses.forEach((course) => {
    const {name, price, diets} = course;
    menuHTML += `<li>Ruokalaji: ${name.trim() ? name : 'Nimeä ei saatavilla'} Hinta: ${price ? price : '(Hinta ei saatavilla.)'}<br><em> Allergiatiedot:</em> ${diets ? diets : 'Ei allergiatietoja'}<br><br></li>`;
  });
  const completeHTML = `
        <header>
          <h3 class="restaurant-name">${name}</h3>
          <p>${company}</p>
        </header>
        <address>
          ${address}<br>
          ${postalCode} ${city}<br>
          <i class="fa-solid fa-phone"></i> :${phone && phone.trim() !== '-' ? phone : ' Ei puhelinnumeroa.'}<br>
        </address>
        <div>
          <h3>Päivän ruokalista: </h3>
          <ul class="menu-list">${menuHTML}</ul>
        </div>`;

  return completeHTML;
};


export {fetchData};
export {restaurantRow};
export {restaurantModal};
