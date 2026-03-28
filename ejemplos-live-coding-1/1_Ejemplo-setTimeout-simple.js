// ====================================================================
//             Ejemplo básico de Asincronía con setTimeout
// ====================================================================

console.log("Inicio del ejemplo 1");

setTimeout(() => {
  console.log("Esto se ejecuta después (asíncrono)");
}, 0);

console.log("Fin del ejemplo 1");

// Aunque sean 0 milisegundos, setTimeout es una función que le dice a JS que esta tarea toma tiempo,
// por eso igual sale al final

//
// Cómo podría verse el setTimeout:
/*
const setTimeout = (callback, tiempoDeRetraso) => {
  esperar ${tiempoDeRetraso} milisegundos
  callback()
  }
*/
