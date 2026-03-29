// =====================================
//        Funciones Asíncronas
// =====================================

// Una función async permite escribir código asíncrono de forma más clara.
// Se usa junto con await para esperar la ejecución de una promesa antes de continuar.

async function obtenerDatos() {
  console.log("Obteniendo datos...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Datos obtenidos");
}

obtenerDatos();
