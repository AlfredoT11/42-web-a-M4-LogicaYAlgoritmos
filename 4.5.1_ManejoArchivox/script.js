const fs = require('fs'); // fs = File System

// JSON = JavaScript Object Notation
// Objecto literal
let persona = {
    nombre: "Juan",
    primerApellido: "Pérez",
    edad: 25
};

// Operaciones básicas
/*
    Crear - Create
    Leer - Read
    Actualizar - Update
    Eliminar - Delete
    CRUD
*/

/*
Los JSON los convierte a Objectos literales
*/

// Logs: Un registro de lo que pasa dentro de un sistema.

// Crear archivo
function crearJSON(rutaArchivo, contenido){

    if(fs.existsSync(rutaArchivo)){ // Si el archivo ya existe, true. Si no, regresa false
        console.log(`El archivo ya existe`);
    }else{
        let contenidoJson = JSON.parse(contenido); // Convierte texto a JSON
        let contenidoTexto = JSON.stringify(contenidoJson); // Convierte JSON a texto
        fs.writeFileSync(rutaArchivo, contenidoTexto); // Necesito enviar texto.
        //fs.writeFile(); Asíncrona
    }
}

// Leer archivo
function leerJSON(rutaArchivo){
    if(fs.existsSync(rutaArchivo)){
        const contenidoArchivo = fs.readFileSync(rutaArchivo);
        console.log(contenidoArchivo);
        const contenidoArchivoObjectoLiteral = JSON.parse(contenidoArchivo);
        console.log(contenidoArchivoObjectoLiteral);
        if(contenidoArchivoObjectoLiteral.hasOwnProperty('mensaje')){
            console.log(contenidoArchivoObjectoLiteral.mensaje);
        }else{
            console.log(`No existe la propiedad mensaje`);
        }
    }else{
        console.log(`El archivo en la ruta ${rutaArchivo} no existe`);
    }
}

// Modificar archivo
function modificarArchivoTexto(rutaArchivo, contenidoAdicional){
    if(fs.existsSync(rutaArchivo)){
        let fechaHoraActual = new Date(); // new Date() regresa la fecha y hora en milisegundos.
        let fecha = `${fechaHoraActual.toLocaleDateString()} ${fechaHoraActual.toLocaleTimeString()}`;
        fs.appendFileSync(rutaArchivo, `[${fecha}] ${contenidoAdicional}`);
        fs.appendFileSync(rutaArchivo, "\n");
    }else{
        console.log(`El archivo en la ruta ${rutaArchivo} no existe`);
    }
}

// Eliminar archivo
function eliminarArchivo(rutaArchivo){
    if(fs.existsSync(rutaArchivo)){
        fs.unlinkSync(rutaArchivo);
    }else{
        console.log(`El archivo no existe`);
    }
}

const mensaje = '{"mensaje": "Hola mundo"}';
//crearJSON("./archivos/archivoCreado.txt", mensaje);

//leerJSON("./archivo/MiSuperJSON.json");
//leerJSON("./archivos/prueba.json");

modificarArchivoTexto(`./archivos/registroOperaciones.txt`, `El usuario Fulanito inició sesión`);
eliminarArchivo(`./archivos/archivoCreado.txt`);
