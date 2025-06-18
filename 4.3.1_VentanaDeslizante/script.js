function sumaMayorDeArreglo(arreglo, n) {

    /*
        Casos frontera (edge cases): Son casos de nuestros problemas que se salen del comportamiento "esperado" o "normal".
        1. ¿Qué pasa si n > length?                     -> Regresar undefined.
        2. ¿Qué pasa si n <= 0?                         -> Regresar undefined.
        3. ¿Qué pasa si mi arreglo no tiene elementos?  -> Regresar undefined.
        4. ¿Qué pasa si algún elemento no es un número? -> Los valores siempre serán números.
        5. ¿Qué pasa si n no es un número?              -> n siempre será un número.
    */

    /*
    if(n > arreglo.length) return undefined;
    if(n <= 0) return undefined;
    if(arreglo.length == 0) return undefined;
    */
    if (n > arreglo.length || n <= 0 || arreglo.length == 0) return undefined;

    let resultadosSumas = [];

    for (let i = 0; i <= arreglo.length - n; i++) {
        console.log(`Ventana ${i}`);
        let suma = 0;
        for (let j = i; j < i + n; j++) {
            console.log(arreglo[j]);
            suma += arreglo[j];
        }
        console.log(`Suma: ${suma}`);
        resultadosSumas.push(suma);
    }

    console.log(resultadosSumas);
    console.log(Math.max(...resultadosSumas));

    return Math.max(...resultadosSumas);
}

let sumaMaxima = sumaMayorDeArreglo([25, 26, 31, 17, 18], 2);
console.log(`La suma máxima es: ${sumaMaxima}`);

/*
Operador ... -> Copiar los valores de un arreglo.

let edades = [25, 26, 31, 17, 18];
let edades2 = [2, 7, 9, 34];
let copiaEdades = [...edades, ...edades2];

console.log(copiaEdades);
*/
