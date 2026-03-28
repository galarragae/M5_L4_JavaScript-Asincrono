// ====================================================================
//                      Promesas: Ejemplo 1
// ====================================================================

// Variable tipo flag
// let esperando = false;

function obtenerDatosPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = true;  // Al probar con "false" también funciona
      // esperando = true;

      if (exito) {
        const usuario = {
          nombre: "Juan",
          apellido: "Perez",
        };
        resolve(`Datos obtenidos con éxito. ${usuario.nombre}`);
        // esperando = false
      } else {
        reject("Hubo un error en la promesa");
        // esperando = false
      }
    }, 2000);
  });
}

// ---------- Consumir promesa ----------
obtenerDatosPromesa()
  .then((mensaje) => console.log(mensaje)) // resolve --> then ==> Promesa se cumplió
  .catch((error) => console.log(error)); // reject --> catch ==> Promesa se rechazó

// "mensaje" puede tener otro nombre: "respuesta", "casoDeExito"
// Al estar dentro del "then", asume que "mensaje" es lo que retorna el "resolve"
