// Service Worker
const catchName = 'apv-v4';
const files = [
    './',
    './index.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',  
    './js/apv.js',
    './manifest.json',
    './favicon.ico'    
];

// Install of Service Worker
self.addEventListener('install', e => {
    // console.log('Install Service Worker:', e);

    // Catching if dont exists connection to internet
    e.waitUntil(
        caches.open(catchName)
            .then(cache => {
                console.log('Catching...');
                cache.addAll(files);
            })
    );
});

// Active Service Worker
self.addEventListener('activate', e => {
    // console.log('Service Worker Active:', e);

    e.waitUntil(
        caches.keys()
            .then(keys => {
                // console.log(keys);
                return Promise.all(
                    keys.filter(key => key !== catchName)
                        .map(key => caches.delete(key)) // Remove previous Versions 
                )
            })
    );
});

// Event Fetch
self.addEventListener('fetch', e => {
    // console.log('Fetch:', e);
    
    e.respondWith(
        (async function () {
            const cachedResponse = await caches.match(e.request);
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(e.request);
        })()
    );
});
