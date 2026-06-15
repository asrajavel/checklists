const CACHE = 'checklists-v2';
const ASSETS = [
  '/checklists/',
  '/checklists/index.html',
  '/checklists/going-out.html',
  '/checklists/last-day.html',
  '/checklists/last-week.html',
  '/checklists/styles.css',
  '/checklists/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
