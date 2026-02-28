const CACHE_NAME = "validador-cache-v1";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});