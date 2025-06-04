// Declara una variable significa CREAR una variable.
var edadVar;
let edadLet;

// Asignar una variable significa DARLE un valor a una variable.
edadVar = 28;
edadLet = 30;

edadVar = 42;
edadLet = 50;

var edadVar;
//let edadLet;


// Inicializar una variable significa DECLARARLA y ASIGNARLA.
const edadConst = 25; // const = constantes es para variables cuyo valor no cambia en el tiempo.

/*
    Recordatorio de comandos básicos para terminal:
    ls <- Ver los archivos y directorios de una carpeta. (Mac, Linux, Windows (Powershell))
    cd <nombreCarpeta> <- Moverme de una carpeta a otra. (Mac, Linux, Windows)
    cd .. <- Movernos hacia la carpeta padre (una carpeta atrás). (Mac, Linux, Windows (Powershell))
*/

/*
    function <nombreDeLafuncion>(param1, param2, param3, ..., paramN){
        // Código a ejecutar.
    }
*/

function suma(a, b){
    return a + b;
}
console.log(suma(5, 8));

/*
    Funciones flecha -> Funciones anónimas
    (param1, param2, ..., paramN) => {

    }
    Están pensadas para ser utilizadas como callbacks.
    Un callback es una función que se manda como parámetro a otra función.
    Al no tener nombre están pensadas para ser funciones que solamente se utilizan una vez.
*/
function operacionCompleja(a, b){
    return (a + a - (b * b)) / (a + b)
}


(a, b) => {
    return a + b;
}

function operacionMatematica(operacion, a, b){
    return operacion(a, b);
}

console.log(operacionMatematica((a, b) => {return a + b}, 8, 5));
console.log(operacionMatematica((a, b) => {return a * b}, 8, 5));
console.log(operacionMatematica((a, b) => {return (a + a - (b * b)) / (a + b)}, 8, 5));
console.log(operacionMatematica(operacionCompleja, 8, 5));

// Darle nombre a una función flecha.
const operacionResta = (a, b) => {
    console.log(a - b);
    return a - b;
};

operacionResta(70, 50);
