if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(function() {
            console.log('Service worker registered!');
        });
}




























// Caching on user demand
// function cacheOnUserRequest() {
//     if ('caches' in window) {
//         caches.open('USER_REQUESTED').then(function(cache) {
//             cache.add('index.html');
//         })
//     }
// }

// const saveCacheBtn = document.getElementById('save-cache-btn');
// saveCacheBtn.addEventListener('click', cacheOnUserRequest);