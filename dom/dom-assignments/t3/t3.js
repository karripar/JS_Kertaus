'use strict';

console.log(navigator.userAgent);
function getBrowser() {
  const userAgent = navigator.userAgent;
  const match = userAgent.match(/(Chrome|Firefox|Safari|Edge|Trident|Version)\/(\d+)/);
  const browser = match ? match[1] : "Unknown Browser";
  const version = match ? match[2] : "Unknown Version";

  if (browser === "Trident") {
    browser = "Internet Explorer";
  } else if (browser === "Version") {
    browser = "Safari";
  }

  return `${browser}, ${version}`;
}

function getOS() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Win")) return "Windows";
  if (userAgent.indexOf("Mac")) return "Mac OS";
  if (userAgent.indexOf("Linux")) return "Linux";
  if (userAgent.indexOf("Android")) return "Android";
  if (userAgent.indexOf("iPhone") || navigator.userAgent.indexOf("iPad") > -1) return "iOS";
  return "Unknown OS";
}

function getDateTime() {
  const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Europe/Helsinki'
  };
  return new Date().toLocaleString('fi-FI', options);
}

document.addEventListener("DOMContentLoaded", function() {
  const target = document.getElementById('target');
  target.innerHTML = `
      <p>Browser: ${getBrowser()}</p>
      <p>Operating System: ${getOS()}</p>
      <p>Screen width: ${window.innerWidth}px</p>
      <p>Screen height: ${window.innerHeight}px</p>
      <p>Available screen width: ${window.screen.availWidth}px</p>
      <p>Available screen height: ${window.screen.availHeight}px</p>
      <p>Current date and time: ${getDateTime()}</p>
  `;
});
