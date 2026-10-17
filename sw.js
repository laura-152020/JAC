const CACHE = 'jac-sandiego-v2';
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    }).then(function(){ return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function(res){
      // Solo cachear respuestas válidas del mismo origen (evita guardar 404 o errores)
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); }).catch(function(){});
      }
      return res;
    }).catch(function(){ return caches.match(e.request); })
  );
});
