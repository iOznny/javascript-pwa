// Service Worker
const catchName = 'apv-v1';
const files = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js'  
];

// Install of Service Worker
self.addEventListener('install', e => {
    console.log('Install Service Worker:', e);

    // Catching if dont exists connection to internet
    // e.waitUntil(
    //     caches.open(catchName)
    //         .then(cache => {
    //             console.log('Catching...');
    //             cache.addAll(files);
    //         })
    // );
});

// Active Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Active:', e);
});

// Event Fetch
// self.addEventListener('fetch', e => {
//     //console.log('Fetch:', e);
    
//     // e.respondWith(
//     //     caches.match(e.request)
//     //         .then(respuestaCache => {
//     //             return respuestaCache;
//     //         })
//     //         .catch( () => caches.match('/error.html'))
//     // );
// });
