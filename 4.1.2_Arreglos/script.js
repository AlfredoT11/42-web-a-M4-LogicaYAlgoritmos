let informacion = []; // Esto crea un arreglo vacío.

// índices: Es la posición de un dato dentro de un arreglo.
// En JS los índices empienzan desde 0.
//                     0   1     2      3                            4                         5
informacion = ["Cadenas", 10, true, [1, 2], {nombre: "Pedro", edad: 50}, (a, b) => {return a + b}]; // length = 6
console.log(informacion[1]); // Accedemos al valor de un arreglo.
console.log(informacion.length); // Esto me da la longitud del arreglo.
// Quiero imprimir el último elemento de mi arreglo.
console.log(informacion[informacion.length - 1]); // SIEMPRE para acceder al último elemento de un arreglo restamos la longitud - 1.
// En los arreglos de JS NO tenemos índices negativos.

informacion[1] = 20; // Reasignar el valor de un arreglo.
console.log(informacion[1]);

console.log(informacion);

// Imprimir todos los valores de un arreglo uno por uno.
console.log(informacion[0]);
console.log(informacion[1]);
console.log(informacion[2]);
console.log(informacion[3]);
console.log(informacion[4]);
console.log(informacion[5]);

/*
    for(let i = <valorInicial>; i < <valorMaximo>; i++){
        // Código a ejecutar.
    }
*/
//for(let i = 0; i <= informacion.length - 1; i++){
for(let i = 0; i < informacion.length; i++){
    console.log(`${i}: ${informacion[i]}`);
}
//                           0                            3
const filaDeTortillas = ["Omar", "Paola", "Benito", "Diana"];

console.log(filaDeTortillas);
filaDeTortillas.push("Jonathan", "Luis"); // Agregar uno (o más elementos) al FINAL de un arreglo.
console.log(filaDeTortillas);

filaDeTortillas.unshift("Tona"); // Agregar uno (o más elementos) al INICIO del arreglo.
console.log(filaDeTortillas);

filaDeTortillas.shift(); // Permite eliminar EL PRIMER elemento de un arreglo.
console.log(filaDeTortillas);

filaDeTortillas.pop(); // Permite eliminar EL ÚLTIMO elemento de un arreglo.
console.log(filaDeTortillas);

/*
    Fila - Queue
*/

//        0       1         2        3           4
// [ 'Omar', 'Paola', 'Benito', 'Diana', 'Jonathan' ]
/*
    Quiero que Benito se salga de la fila, y que Rosa y Tona se metan en su lugar.
*/

//                     (<valorInicialDeCambios>, <elementosAEliminar>, <valor1Agregar>, <valor2AAgregar>, ..., <valorNAAgregar>);
filaDeTortillas.splice(2, 1, "Rosa", "Tona");
console.log(filaDeTortillas);

// Paradigma de programación -> Un conjunto de reglas, estándares, leyes, convenciones para progamar.
/*
    Imperativa: Nosotros le decimos a la computara QUÉ es lo que tiene que hacer y CÓMO lo debe hacer.
    Declarativa: Nosotros le decimos a la computadora CUÁL debe ser el RESULTADO.
*/

const mascotas = [
    {
        nombre: "Tigrillo",
        especie: "gato",
        edad: 8
    },
    {
        nombre: "Bowie",
        especie: "gato",
        edad: 2
    },
    {
        nombre: "Zoro",
        especie: "gato",
        edad: 1
    },
    {
        nombre: "Cosa",
        especie: "perro",
        edad: 8
    },
    {
        nombre: "Pistache",
        especie: "conejo",
        edad: 5
    }    
]

// Transformar los perros a gatos y los gatos a perros.
const mascotasTransformadas = mascotas.map((elemento) => {
    if(elemento.especie == "perro"){
        return {
            nombre: elemento.nombre,
            edad: elemento.edad,
            especie: "gato"
        };
    }else if(elemento.especie == "gato"){
        return {
            nombre: elemento.nombre,
            edad: elemento.edad,
            especie: "perro"
        };
    }else{
        return elemento;
    }
});

console.log("Mascotas originales: ");
console.log(mascotas);


console.log("Mascotas transformadas: ");
console.log(mascotasTransformadas);

let promedioEdadesMascotas = 0;
mascotasTransformadas.forEach((elemento) => {
    console.log(`${elemento.nombre} tiene ${elemento.edad} años.`);
    promedioEdadesMascotas += elemento.edad;
});

console.log(`El promedio de edades de las mascotas es: ${promedioEdadesMascotas / mascotasTransformadas.length}`);

// Depuración (Debuging): Ejecutar nuestro código línea por línea.

let nombreCompletoArreglo = ["María", "José", "De", "la", "Cruz", "Hernández"];
// Convertir el arreglo a una cadena que sea el nombre completo de la persona.

let nombreCompletoCadena = nombreCompletoArreglo.reduce((nombreCompleto, elemento) => {
    nombreCompleto = nombreCompleto + elemento + " ";
    return nombreCompleto;
}, "");
console.log(nombreCompletoCadena);

/*
    0 = a
    1 = b
    2 = c
    3 = d

    0 = a
    103 = bad
    12 =  bc
*/
let numeros = [12, 25, 5, 41, 103, 7, 58, 0];
console.log("Arreglo original: ");
console.log(numeros);

numeros.sort();

console.log("Arreglo ordenado: ");
console.log(numeros);

numeros.sort((a, b) => {
  return a - b;
});

console.log("Arreglo ordenado: ");
console.log(numeros);
