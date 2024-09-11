const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
    };
    const listaNumeros = [1, 2, 3, 4, 5];
    const promedioNumeros = calcularPromedio(listaNumeros);

// El problema estaba en la línea 3, en  i <= numeros.length, pues ahí decía que i tenía que llegar HASTA numeros.lenght, lo cual queda fuera de rango. Lo correcto es i < numeros.length