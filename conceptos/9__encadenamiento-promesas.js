// ====================================================================
//          Promise Chaining (Encadenamiento de promesas)
// ====================================================================
/*
Permite ejecutar tareas asíncronas secuencialmente al devolver una nueva promesa dentro de un método .then().
Cada .then() recibe el resultado del anterior, facilitando un código limpio, ordenado y evitando el "callback hell".
El flujo se gestiona con un único .catch() al final.

Conceptos Clave del Encadenamiento (Chaining):
-----------------------------------------------
● Secuencia: Las operaciones asíncronas se ejecutan una tras otra; la segunda comienza 
  sólo cuando la primera finaliza con éxito.

● .then() encadenados: Cada .then() devuelve una nueva promesa automáticamente,
  o puedes devolver una explícitamente para que la cadena espere su resolución.

● Manejo de Errores: Un único .catch() al final de la cadena puede capturar errores ocurridos 
  en cualquier paso anterior.
*/

// Ejemplo típico de encadenamiento ()
const realizarTarea = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("1. Datos recibidos"), 2000);
  });
};

realizarTarea()
  .then((resultado) => {
    console.log(resultado); // "1. Datos recibidos"
    return "2. Procesando datos"; // Pasa valor al siguiente .then
  })
  .then((resultado2) => {
    console.log(resultado2); // "2. Procesando datos"
    return new Promise((resolve) => {
      setTimeout(() => resolve("3. Tarea finalizada"), 2000);
    });
  })
  .then((resultado3) => {
    console.log(resultado3); // "3. Tarea finalizada"
  })
  .catch((error) => {
    console.error("Error:", error); // Captura errores de cualquier paso
  });
