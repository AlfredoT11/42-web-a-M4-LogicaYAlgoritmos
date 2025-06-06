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

/*
    1. Van a tomar cualquier ejercicio de su módulo pasado y ejecutarlo con NodeJS.
    2. Investigar cómo leer datos de la terminal:
        - Pedir nombre
        - Pedir edad
        - Preguntar si son mexicanos o no.
        Mostrar un mensaje con la información tienen que ponerlo dentro de una función flecha.
*/

let nombre1 = "Juan";
let pregunta = "¿Cómo estás?";
console.log("¡Hola " + nombre1 + "!" + pregunta); // Hola Juan

// Template literals: Es una forma de crear cadenas complejas sin concatenación.
/*
    `` <- backticks Alt + 96
*/

let edad1 = 36;
let mensaje = `¡Hola, mi nombre es ${nombre1} y tengo ${edad1} años!`; // ¡Hola, mi nombre es Juan y tengo 36 años!
console.log(mensaje);

/*
    Destructuración -> Sirve para los objetos literales y para los arreglos.
    Es una técnica que nos permite "desmenuzar" un objeto literal/arreglo en más variables.
*/

/*
    Objecto literal: Un tipo de dato de JS que nos permite guardar más de un valor en una variable y acceder a esos valores a través de una llave.
*/

const mascota = {
    nombre: "Bowie",
    edad: 7,
    estaEsterilizado: true
}

const nombreMascota = "Bowie";
const edadMascota = 7;
const estaEsterilizadoMacota = true;

console.log(mascota.nombre); // Acceder a un valor.
console.log(mascota.edad); // Acceder a un valor.
console.log(mascota["nombre"]); // Acceder a un valor.

mascota.edad = mascota.edad + 1; // Reasignado un valor a una llave del objeto literal.
console.log(mascota.edad); // Acceder a un valor.

/*
    let nombre = mascota.nombre;
    let edad = mascota.edad;
    let estaEsterilizado = mascota.estaEsterilizado;
*/
let {nombre, edad, estaEsterilizado} = mascota; // Destructuración.
console.log(nombre);
console.log(edad);
console.log(estaEsterilizado);

// Destructuración con arreglos.



