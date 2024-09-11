console.log('Ejercicio 2')
/*
Ejercicio 2 Arreglar bug
Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice
que no funciona. No nos da el error, solo este código que es el que tiene en producción.
Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución.

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i <= numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
*/

console.log('Dado que el enunciado así lo indica, resuelvo el ejercicio en el archivo bug.js')
console.log('El problema estaba en la línea 3, en  i <= numeros.length, pues ahí decía que i tenía que llegar HASTA numeros.lenght, lo cual queda fuera de rango. Lo correcto es i < numeros.length')
