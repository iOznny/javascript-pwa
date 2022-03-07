# javascript-pwa
Javascript - Sección: 47: Service Workers &amp; Web Workers with Progressive Web Applications (PWA)

# Caracteristicas de una PWA
- Rapida, cargan toda la informacion en menos de 5 segundos.
- Instalable, se puede navegar o instalar en tu navegador o telefono movil como una app nativa.
- Soporte Offline, pueden funcionar incluso sin conexión a internet.

- Para instalar una PWA debes tener en cuenta:
* Tener una manifest.json valido.
* Tener un dominio HTTPS o ser localhost.
* Tener registrado el eventListener de Fetch.


# Service Workers
- Base de una PWA, son los Scripts que estan corriendo todo el tiempo detras de escenas.
- Funcionan Offline.
- No tienen acceso al DOM.
- Cargan de forma instantanea.
- Pueden sincronizar datos detras de escena o sin interferir en la navegación.

* Funciones no disponibles en Services Workers
- No utiliza (window) utiliza (self).
- No utiliza (document) utiliza (caches).
- No utiliza (localStorage) utiliza (fetch).
