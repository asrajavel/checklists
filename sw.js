// Network first, so a pushed change shows on the next load; the cache only opens pages without network.
// no-cache: ask the server every time (cheap, it answers "unchanged"), else Pages' 10-minute browser cache serves old files.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request, { cache: "no-cache" }).then(r => {
    if (r.ok) { const c = r.clone(); caches.open("checklists").then(k => k.put(e.request, c)); }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || Response.error())));
});
