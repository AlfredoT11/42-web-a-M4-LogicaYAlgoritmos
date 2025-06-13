/*
    Fuerza bruta
*/
function encontrarParDeNumeros(arreglo, x){

    //console.log(arreglo);
    //console.log(x);
    
    for(let i = 0; i < arreglo.length - 1; i++){
        for(let j = i + 1; j < arreglo.length; j++){
            console.log(`a[${i}] + a[${j}] = ${arreglo[i]} + ${arreglo[j]} = ${arreglo[i] + arreglo[j]}`);
            if(arreglo[i] + arreglo[j] === x){
                console.log(`Este par de valores me da el resultado buscado`);
                return [i, j];
            }
        }
    }
    
    return [-1, -1];
}
//              0  1  2  3   4   5
let arreglo1 = [2, 4, 6, 8, 13, 21];
let valorABuscar = 15;

let resultado = encontrarParDeNumeros(arreglo1, valorABuscar);
console.log(resultado);

resultado = encontrarParDeNumeros(arreglo1, 100);
console.log(resultado);

