function saludar(nombre, contador, ejecucionMaxima){
    if(contador == ejecucionMaxima) return;
    console.log(`${contador}: Hola ${nombre}`);
    saludar(nombre, contador + 1, ejecucionMaxima);
}

saludar("Juan", 0, 10);

function a(){
    console.log("1. Soy la función A");
    console.log("2. Fin de la función A");
}

function b(){
    console.log("3. Soy la función B");
    a();
    console.log("4. Fin de la función B");
}

function c(){
    console.log("5. Soy la función C");
    b();
    console.log("6. Fin de la función C");
}

// 5 3 1 2
// 5 3 4 6

c();

// Cualquier cosa que se puede hacer con un ciclo (while, for) se puede hacer con recursividad y viceversa.
// Un número del 1 al 1000 en máximo 11 intentos.
/*
    Búsqueda binaria: Es un algoritmo para encontrar un valor dentro de un conjunto de datos ORDENADO.
    1. (1 - 1000)   -> 500 >      Caso 2.
    2. (501 - 1000) -> 750 >      Caso 2.
    3. (751 - 1000) -> 875 >      Caso 2.
    4. (876 - 1000) -> 938 >      Caso 2.
    5. (939 - 1000) -> 969 >      Caso 2.
    6. (970 - 1000) -> 985 >      Caso 2.
    7. (986 - 1000) -> 993 <      Caso 3.
    8. (986 - 993)  -> 989 !!!!!! Caso 1.
*/

/*
 valor a buscar = 7
     0 1 2 3 4 5 6 7 8 9   <- índices
a = [1 2 3 4 5 6 7 8 9 10] Mitad = 4.5 -> 4 Inicio = 0 Final = 9
¿a[4] == 7? 5 < 7
               5 6 7 8 9   <- índices
              [6 7 8 9 10] Mitad = (5 + 9)/2 = 14 / 2 = 7 Inicio = 5 Final = 9
¿a[7] == 7? 8 > 7
               5 6  <- índices
              [6 7] Mitad = (5 + 6)/2 = 11/2 = 5.5 = 5 Inicio = 5 Final = 6
¿a[5] == 7? 6 < 7
                 6   <- índices 
                [7] Mitad = (6 + 6)/2 = 6 Inicio = 6 Final = 6
¿a[6] == 7? 7 == 7!!!!!

 valorABuscar = 7
     0
a = [8]    Inicio = 0, Final = 0, Mitad = (0 + 0)/2 = 0
¿a[0] == valorABuscar? => ¿8 == 7? => false
 
 0  1  2  3  4  5  6   7   8  9
[1  2  3  4  5  6  8  10  11 12]
...
                   6
                  [8], Inicio = 6, Final = 6, Mitad = 6

*/

function busquedaBinaria(arreglo, valorABuscar, inicio, final){
    let indiceMitad = Math.floor((inicio + final)/2); // Math.floor() redondea un valor hacia el enterno menor más cercano. 5.5 -> 5, 4.2 -> 4, 8.9 -> 8
    // Math.ceil() rendondear hacia el entero mayor más cercano. 4.1 -> 5, 8.9 -> 9 

    if(inicio == final && arreglo[indiceMitad] != valorABuscar) return -1;

    // Caso 1. El valor de la mitad es el valor que estoy buscando.
    if(arreglo[indiceMitad] === valorABuscar){
        return indiceMitad;

    // Caso 2. El valor de la mitad es MAYOR que el valor buscado.
    }else if(arreglo[indiceMitad] > valorABuscar){
        return busquedaBinaria(arreglo, valorABuscar, inicio, indiceMitad - 1);
    // Caso 3. El valor de la mitad es MENOR que el valor buscado.
    }else{
        return busquedaBinaria(arreglo, valorABuscar, indiceMitad + 1, final);
    }
}

//             0            4                                       13    14
let arreglo = [1, 2, 7, 9, 11, 25, 32, 41, 89, 101, 203, 409, 538, 709, 1000]; // l = 15
let valorABuscar = 11;
let resultadoBusqueda = busquedaBinaria(arreglo, valorABuscar, 0, arreglo.length - 1);
console.log(`El índice del valor ${valorABuscar} es ${resultadoBusqueda}`);

valorABuscar = 709;
resultadoBusqueda = busquedaBinaria(arreglo, valorABuscar, 0, arreglo.length - 1);
console.log(`El índice del valor ${valorABuscar} es ${resultadoBusqueda}`);

valorABuscar = 150;
resultadoBusqueda = busquedaBinaria(arreglo, valorABuscar, 0, arreglo.length - 1);
console.log(`El índice del valor ${valorABuscar} es ${resultadoBusqueda}`);
