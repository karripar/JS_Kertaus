'use strict';

const celsius = prompt("Provide the temperature in celcius: ");
const fahrenheit = (celsius * (9 / 5)) + 32;
const kelvin = celsius + 273.15;
const result = document.querySelector(".result");
result.innerHTML = `Celsius: ${celsius}C, Fahrenheit: ${fahrenheit}F, Kelvin: ${kelvin}K.`
