/*
    Fuerza bruta
*/
function encontrarParDeNumeros(arreglo, x){

    //console.log(arreglo);
    //console.log(x);
    
    for(let i = 0; i < arreglo.length - 1; i++){
        for(let j = i + 1; j < arreglo.length; j++){
            //console.log(`a[${i}] + a[${j}] = ${arreglo[i]} + ${arreglo[j]} = ${arreglo[i] + arreglo[j]}`);
            if(arreglo[i] + arreglo[j] === x){
                console.log(`Este par de valores me da el resultado buscado`);
                return [i, j];
            }
        }
    }
    
    return [-1, -1];
}

function encontrarParSumaDosPunteros(arreglo, x){

    let i = 0;
    let j = arreglo.length - 1;

    while(i !== j){
        let suma = arreglo[i] + arreglo[j];
        if(suma === x){
            return [i, j];
        }else if(suma < x){
            i++;
        }else{
            j--;
        }
    }

    return [-1, -1];
}


//              0  1  2  3   4   5
let arreglo1 = [2, 4, 6, 10, 22, 30];
let valorABuscar = 32;

console.log("Fuerza bruta");
let resultado = encontrarParDeNumeros(arreglo1, valorABuscar);
console.log(resultado);

resultado = encontrarParDeNumeros(arreglo1, 100);
console.log(resultado);

console.log("Dos punteros");
resultado = encontrarParSumaDosPunteros(arreglo1, valorABuscar);
console.log(resultado);

resultado = encontrarParSumaDosPunteros(arreglo1, 100);
console.log(resultado);

