// ====================================================================
//                         Async / Await
// ====================================================================

function tarea(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let fallo = true; // para probar el .catch(error)

      if (!fallo) {
        console.log(`Tarea ${numero} completada`);
        resolve();
      } else {
        console.log(`No se pudo completar la Tarea ${numero}`);
        reject(`El valor de fallo es ${fallo}`);
      }
    }, 1000);
  });
}

// ---------- Consumir promesa ----------
tarea(1)
  .then(() => tarea(2))
  .then(() => tarea(3))
  .then(() => console.log("Todas las tareas se ejecutaron exitosamente"))
  .catch((error) => console.error("Error en la operación.", error));

// ---------- Función asíncrona: async/await ----------
async function ejecutarTareas() {
  try {
    console.log("Consumiendo promesa con async/await...");

    //Esperar a que se resuelvan las promesas
    await tarea(1);
    await tarea(2);
    await tarea(3);
  } catch (error) {
    console.error("Hubo un error en la ejecución de la(s) tarea(s)", error);
  }
}
