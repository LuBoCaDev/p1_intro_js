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

console.log('   Ejercicio 3.1') // el tabulado antes de la palabra Ejercicio es a propósito y meramente estético para cuando se vea a través de html

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
        const directorios = input.slice(0, -2).join('/');   // Separamos los directoorios con '/'
        const resultado = `${directorios}/${nombreArchivo}.${extension}`; // Ruta completa
        console.log(resultado);
    };
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
    yourFunction(input3); // 'programming/languages/easy/beginner/useful/pythonstuff.py'

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
*/

console.log('   Ejercicio 3.2')
const input = 10;
// create your function here
function yourFunction2(input) {
    let resultado = input.toString().split('').join('-'); // Pasa de números a cadena y se separan con -
    console.log(resultado);
}
yourFunction2(input); // '1-0'

const secondInput = 1;
yourFunction2(secondInput); // '1'

const thirdInput = 11234;
yourFunction2(thirdInput); // '1-1-2-3-4'


/*
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

console.log('   Ejercicio 3.3')

const inputA = 'string';
// create your function here
function yourFunction3(entrada) {
    const largoCadena = entrada.length; // Largo de la cadena
    const cadenaInversa = entrada.split('').reverse().join(''); // invierta la caden
    console.log(`${largoCadena} ${cadenaInversa}`);
}
  yourFunction3(inputA); // '6 gnirts'

const inputB = 'variable';
  yourFunction3(inputB); // '8 elbairav'

const inputC = 'pointer';
  yourFunction3(inputC); // '7 retniop'