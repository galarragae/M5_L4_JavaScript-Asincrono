// =====================================
//        Callbacks Asíncronos
// =====================================

// Es una función que se pasa como argumento a otra función para ejecutarse después de una operación.
// Se usa en programación asíncrona para manejar tareas como lectura de archivos, consultas a bases de datos
// o llamadas a APIs.

function procesarCallback(callback) {
  console.log("Inicio");
  setTimeout(() => {
    console.log("Tarea completada");
    callback();
  }, 2000);
}

procesarCallback(()=> console.log("Ejecutando callback"));  // Con función flecha
// procesarCallback(function () {
//   console.log("Ejecutando callback");
// });
