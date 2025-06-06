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

