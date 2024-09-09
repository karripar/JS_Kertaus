"use strict";

let cacheName = "Hello World";
let filesToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/main.js",
  "./images/sky.jpg",
  "./fonts/Nunito_Sans/static/NunitoSans_7pt-Regular.ttf",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        await cache.addAll(filesToCache);
      } catch (error) {
        console.error("Failed to cache resources during install:", error);
      }
    })()
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      try {
        const response = await caches.match(e.request);
        return response || fetch(e.request);
      } catch (error) {
        console.error("Failed to fetch resource:", error);
        throw new error();
      }
    })()
  );
});
