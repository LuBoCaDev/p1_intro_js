/*
Ejercicio 6: Keepcoding playlist
Tenemos un cliente que tiene una página donde se pueden crear listados de canciones. Es
la siguiente:

>>> Imagen visible en el documento de ejercicios <<<

El cliente ha creado la maquetación y la lógica de los formularios e interacciones con
botones de para ordenar, marcar como favorito y borrar. Sin embargo, necesita nuestra
ayuda para manejar el estado o lógica de esta web.
Para ello nos pide que creemos un estado en una función (usando cierres) que tenemos
que exportar y se va a encargar de gestionar las funcionalidades de la app.

Nuestro cliente nos dio el archivo que tenemos que modificar para hacer funcionar su web.
Únicamente es necesario modificar este archivo. Este se encuentra en la carpeta
playlist/js/playlist.js.
Cada playlist tiene un nombre y un listado de canciones. Las canciones tienen título,
nombre del artista, género musical, duración en segundos y si es tu favorita.
En un comentario estaría la estructura de datos.

/**
 * @typedef {Object} Song
 * @property {string} title-The title of the song.
 * @property {string} artist-The artist of the song.
 * @property {string} genre-The genre of the song.
 * @property {number} duration-The duration of the song in seconds.
 * @property {boolean} favorite-Whether the song is marked as a
favorite.
 */
 // Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }
/*
 * @typedef {Object} Playlist
 * @property {string} name-The name of the playlist.
 * @property {Song[]} songs-The list of songs in the playlist.
 */
 // Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

/*
A continuación os dejaré algunos pasos para ir empezando este reto. La web la podemos
abrir usando live-server en la ruta http://localhost:5500/playlist/playlist.html

    1. Abre el terminal de tu navegador con la web y revisa el error que aparece.
    2. Tenemos la función pero no está exportada. El cliente quiere que se exporte como
    módulo por defecto. Recordemos cómo hicimos con el cart de clase export
    default cart;
    3. Revisa que el error no aparece.
    4. Ya tenemos conectado nuestro código a la web. Ahora toca implementar los
    métodos.
    5. Empezar con “createPlaylist”. Este método tiene que añadir al listado de playlists un
    objeto playlist que tiene un “name” y un listado de canciones. Como nos sabemos las
    canciones irán vacías.
    6. Luego podemos implementar el “getAllPlaylists” que solo tiene que devolver las
    playlists.
    7. Eneste punto se puede probar crear una playlist en la web y ver que aparece.
    8. Podemos continuar con “removePlaylist”
    9. Para el “addSongToPlaylist” vamos a recibir 2 parámetros, el nombre de la playlist
    para saber donde guardar el segundo parámetro que es un objeto con una canción.
    IMPORTANTE: tener en cuenta que ese objeto no tiene el campo favorite. Por
    lo que es necesario tener en cuenta al guardarlo ponerlo como false.
    10. Con eso ya deberían salir canciones nuevas en cada playlist
    11. Continuar con “removeSongFromPlaylist”
    12. Opcional: método “favoriteSong” el cual a partir del nombre de la playlist y la canción
    hay que cambiar el favorite de false a true.
    13. Opcional: método “sortSongs” a partir del nombre de la playlist y un criterio que
    pueden ser alguno de estos 3 valores 'title' | 'artist' | 'duration'. Ordenar el listado de
    canciones de esa playlist.
        a. title: Ordenar alfabéticamente
        b. artist: Ordenar alfabéticamente
        c. duration: Ordenar de menor a mayor

Recomendación: Haz commit cada vez que hagas uno de estos puntos y por cada
ejercicio.
Ejemplo:
    git commit-m “feat: add createPlaylist logic
*/