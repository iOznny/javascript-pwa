// Register of a Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(register => {
            // console.log(register);
        })
        .catch(error => console.log(error));

} else {
    console.log('No Support');
}