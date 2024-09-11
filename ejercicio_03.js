console.log('Ejercicio 3')
/*
Ejercicio3
En estos ejercicios no tienes acceso al enunciado. Debes deducir qué hacer observando los datos
de entrada y el resultado:
3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]
// create your function here
yourFunction(input1); // 'Downloads/Videos/capture.mp4'
const input2 = [
    'CodinGame',
    'python',
    'py',
];
 yourFunction(input2); // 'CodinGame/python.py'
const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]
yourFunction(input3);
// 'programming/languages/easy/beginner/useful/pythonstuff.py'
*/

console.log('   Ejercicio 3.1')
const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]
// create your function here
    const yourFunction = (input) => {
        const nombreArchivo = input[input.length - 2];      // Nombre del archivo
        const extension = input[input.length - 1];          // Extensión
        const directorios = input.slice(0, -2).join('/');   // Ruta de directorios separados por '/'
        const resultado = `${directorios}/${nombreArchivo}.${extension}`; // Ruta completa
        return resultado;
    };

    yourFunction(input1); // 'Downloads/Videos/capture.mp4'
    console.log(yourFunction(input1));

    const input2 = [
    'CodinGame',
    'python',
    'py',
    ];
    yourFunction(input2); // 'CodinGame/python.py'
    console.log(yourFunction(input2));

    const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
    yourFunction(input3);
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'
    console.log(yourFunction(input3));

/*
3.2 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input = 10;

// create your function here

yourFunction(input); // '1-0'

const secondInput = 1;

yourFunction(input); // '1'

const thirdInput = 11234;

yourFunction(input); // '1-1-2-3-4'



3.3 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input1 = 'string';

// create your function here

yourFunction(input); // '6 gnirts'

const input2 = 'variable';

yourFunction(input); // '8 elbairav'

const input3 = 'pointer';

yourFunction(input); // '7 retniop'

//Lo importante en estos ejercicios es ver el patrón con cada ejemplo. En ningún caso es
necesario usar ningún tipo decondicional.
*/