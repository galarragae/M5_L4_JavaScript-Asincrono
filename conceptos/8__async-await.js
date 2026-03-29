// ====================================================================
//                          async/await
// ====================================================================
/*
async/await es una forma más clara y estructurada de trabajar con código asíncrono
sin anidar .then() y .catch()
*/

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random().toFixed(1); // .toFixed(1) deja sólo un decimal y redondea!!!

    if (num >= 0.5) {
      resolve(`\n¡Éxito! ${num} es >= 0.5`);
    } else {
      reject(`\nError: ${num} es < 0.5`);
    }
  }, 2000);
});

async function obtenerDatos(){
  try {
    let respuesta = await miPromesa;
    console.log("Datos obtenidos:", respuesta);

  } catch (error) {
    console.log("Error:", error);
  }
}

obtenerDatos();