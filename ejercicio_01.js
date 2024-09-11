/*
Ejercicio 1
Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes campos:
-Nombre (el tuyo o inventado)
-Apellidos (el tuyo o inventado)
-Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
    de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
-Si estás en búsqueda activa con un valor de verdadero o false

En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
    objeto que hemos creado anteriormente.
 */
console.log('Ejercicio 1')

const usuario = {
    nombre: 'Lucas',
    apellidos: 'Borondo Cañizares',
    temasBootcap: [
        {nombreTema: 'Node.js', fechaInicioTema: '2024-10-21'},
        {nombreTema: 'Git', fechaInicioTema: 'Pending'},
        {nombreTema: 'React', fechaInicioTema: '2024-12-16'}
    ],
    busquedaActiva: true
};

const temaReact = usuario.temasBootcap.find(tema => tema.nombreTema === 'React');
console.log(`El módulo de React comienza el ${temaReact.fechaInicioTema}`);