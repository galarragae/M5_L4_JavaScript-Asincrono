// ====================================================================
//          Ventajas de las promesas sobre los callbacks
// ====================================================================

// ✅ Menos anidamiento ("callback hell")
// ✅ Manejo estructurado de errores con .catch()
// ✅ Encadenamiento con .then() para flujo de datos

//
// ------------- Ejemplo con callback hell -------------

function tarea(callback) {
  setTimeout(() => {
    console.log("Tarea completada");
    callback();
  }, 2000);
}

tarea(() => {
  console.log("Otra tarea");
});

//
// ------------- Ejemplo con promesas -------------

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 2 completada"), 2000);
  });
}

tarea2().then((mensaje) => console.log(mensaje));
