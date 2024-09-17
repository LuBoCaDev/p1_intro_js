console.log('Ejercicio 5')
/*
Ejercicio 5 Arreglar bug de asincronía.
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.

 // Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    let usuario;

    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);

    return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario);
*/

// Promise + Async/Await
function obtenerUsuarioProm(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000);
    })};

const mostrarUsuario = async (id) => {
    try {
        const usuario = await obtenerUsuarioProm(id);
        console.log(usuario);
    } catch (error) {
        console.error('Usuario no encontrado'); 
    }};

mostrarUsuario(1);

// Callback 
function obtenerUsuarioCB(id, callback) { 
    setTimeout(() => {
        if (id === 1) {
        const usuario = { id: 1, nombre: 'John Doe' };
        callback(usuario);
        } else {
        callback('Usuario no encontrado');
        }
    }, 2000);
    };

    obtenerUsuarioCB(1, (usuario) => {
    console.log(usuario); 
    });