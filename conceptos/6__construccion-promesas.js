// ====================================================================
//                    Construcción de promesas
// ====================================================================

// Se usa el constructor new Promise() con dos parámetros: resolve y reject

const promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Error en la operación");
  }
});