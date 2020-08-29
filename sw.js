const STATIC_CACHE = 'STATIC';

self.addEventListener('install', function(event) {
    console.log('Installing Service Worker', event);
    event.waitUntil(
        caches.open(static).then(function(cache) {
            console.log('Precaching started');
            cache.addAll([
                'index.html',
                'offline.html',
                'app.js',
                'app.css',
                'favicon.ico'
            ]);
        })
    )
});

self.addEventListener('activate', function(event) {
    console.log('Activating Service Worker from Service Worker', event);
    return self.clients.claim();
});

// // Retrieving files from cache
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             // response can be null if no match found
//             if (response) {
//                 return response;
//             }
//         })
//     )
// });


// Retrieving files from server if not found in cache
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             // response can be null if no match found
//             if (response) {
//                 return response;
//             } else {
//                 return fetch(event.request);
//             }
//         })
//     )
// });

// Retrieving files from server if not found in cache
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             // response can be null if no match found
//             if (response) {
//                 return response;
//             } else {
//                 return fetch(event.request)
//                 .then(function(res) {
//                     return caches.open(dynamic)
//                     .then(function(cache) {
//                         cache.put(event.request.url, res.clone());
//                         return res;
//                     });
//                 });
//             }
//         })
//     )
// });


// Falling back to a default file if data not found
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             // response can be null if no match found
//             if (response) {
//                 return response;
//             } else {
//                 return fetch(event.request)
//                     .then(function(res) {
//                         return caches.open(dynamic)
//                             .then(function(cache) {
//                                 cache.put(event.request.url, res.clone());
//                                 return res;
//                             })
//                     })
//                     .catch(function() {
//                         // will always return this page if any kind of response is not fetched, even json
//                         return caches.match('offline.html');
//                     })
//             }
//         })
//     )
// });


//removing old caches
// self.addEventListener('activate', function(event) {
//     console.log('Activating Service Worker from Service Worker', event);
//     event.waitUntil(
//         caches.keys().then(function(keyList) {
//             return Promise.all(keyList.map(function(key) {
//                 console.log('Removing Old cache');
//                 if (!key.includes('V4')) {
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
//     return self.clients.claim();
// });


// Offering cache on demand: see app.js file
// Caching Strategies