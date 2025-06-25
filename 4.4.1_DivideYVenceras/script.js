// Es una función que combina los arreglos A y B dentro de resultado de forma ordenada.
function merge(A, B, resultado){
    let punteroA = 0; // i
    let punteroB = 0; // j

    while(punteroA != A.length && punteroB != B.length){
        //console.log('Originales');
        //console.log(A.slice(punteroA, A.length));
        //console.log(B.slice(punteroB, B.length));
        if(A[punteroA] < B[punteroB]){
            resultado.push(A[punteroA]);
            punteroA++;
            
        }else{
            resultado.push(B[punteroB]);
            punteroB++;
        }
        //console.log('Combinando valor');
        //console.log(A.slice(punteroA, A.length));
        //console.log(B.slice(punteroB, B.length));
        //console.log(resultado);
    }

    // Nos quedamos sin valores que comparar en A.
    // Copiar los valores restantes de B.
    if(punteroA == A.length){
        while(punteroB < B.length){
            resultado.push(B[punteroB]);
            punteroB++;
            //console.log('Combinando valor');
            //console.log(B.slice(punteroB, B.length));
            //console.log(resultado);
        }
    }

    // Nos quedamos sin valores que comparar en B.
    // Copiar los valores restantes de A.
    if(punteroB == B.length){
        while(punteroA < A.length){
            resultado.push(A[punteroA]);
            punteroA++;
            //console.log('Combinando valor');
            //console.log(A.slice(punteroA, A.length));
            //console.log(resultado);
        }
    }
}


/*
    Complejidad computacional: Nos permite medir la eficiencia de un algoritmo.
    - Eficiencia en tiempo.
        - El número de operaciones que hace un algoritmo.
    - Eficiencia en espacio.
        - La cantidad de datos que requiere un algoritmo.
*/

// Algoritmo de ordenamiento de uso general con complejidad O(n log2(n)) <- Complejidad en tiempo
function mergesort(arreglo){

    /*
    splice() <- Sirve para modificar un arreglo.
    slice(valorInicial, valorFinal)  <- Sieve para partir un arreglo.
    */
    //  0  1  2  3   4  5
    // [1, 5, 9, 7, 12, 2] l = 6, mitad = 5/2 = 2.5
    // arreglo.slice(0, 3)
    // Math.floor() Redondea un número a su entero menor. 4.5 -> 4, 2.1 -> 2, 9.9 -> 9
    console.log(arreglo);

    let arregloOrdenado = [];

    if(arreglo.length > 2){
        // Dividir
        let indiceMitad = Math.floor(arreglo.length / 2);
        let arregloIzquierdo = arreglo.slice(0, indiceMitad);
        let arregloDerecha = arreglo.slice(indiceMitad, arreglo.length);
        let a = mergesort(arregloIzquierdo); // Arreglo izquierdo.
        let b = mergesort(arregloDerecha); // Arreglo derecho.
        merge(a, b, arregloOrdenado);
    }else if(arreglo.length == 2){
        // Caso base 1: Si tengo un arreglo de 2 elementos, solamente los comparo para ordenarlos.
        if(arreglo[0] > arreglo[1]){
            // Invertivmos
            arregloOrdenado.push(arreglo[1]);
            arregloOrdenado.push(arreglo[0]);
        }else{
            // Los dejamos igual
            arregloOrdenado.push(arreglo[0]);
            arregloOrdenado.push(arreglo[1]);
        }
    }else{ // arreglo.length == 1
        // Caso base 2: Si tengo un arreglo de un elemento, solamente copio el elemento.
        arregloOrdenado.push(arreglo[0]);
    }

    console.log(`Ordenado: ${arregloOrdenado}`);
    return arregloOrdenado;

}

let arreglo = [2, 4, 1, 5, 9, 6, 2, 8, 7];
mergesort(arreglo);

let a = [1, 2, 3, 7, 9];
let b = [2, 4, 5, 10, 12, 14, 15];
let resultado = [];

merge(a, b, resultado);
console.log(resultado);