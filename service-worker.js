self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('trainer-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'exercises.html',
        'projects.html',
        'settings.html',
        'donate.html',
        'style.css',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
