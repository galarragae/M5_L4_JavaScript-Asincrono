// ====================================================================
//                            CALLBACK
// ====================================================================

function procesarDatos(callback) {
  console.log("Procesando información...");

  //Simular una tarea que toma tiempo
  setTimeout(() => {
    console.log("Datos recibidos del servidor");

    // Ejecutar callback
    callback();
  }, 2000);
}

procesarDatos(() => console.log("El callback se ejecutó"));
