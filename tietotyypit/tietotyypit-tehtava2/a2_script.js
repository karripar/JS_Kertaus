'use strict';

let xy1 = prompt("Provide the x,y coordinates of the first point separated by space (ie. 4 23)");
let xy2 = prompt("Provide the second coordinates in the same manner.");
let coord1 = xy1.split(' ')
let coord2 = xy2.split(' ')
const x1 = parseInt(coord1[0]);
const x2 = parseInt(coord2[0]);
const y1 = parseInt(coord1[1]);
const y2 = parseInt(coord2[1]);
const distance = ((x2 - x1)^2+(y2-y1)^2)^0.5
const result = document.querySelector(".result");
result.innerHTML = `Euclidean distance between the points: ${distance}m`;
