// ====================================================================
//                      Promesas: Ejemplo 2
// ====================================================================
/*
🔑 Cambios clave respecto al caso de tareas con callbacks:

• Cada función devuelve una Promise (en el caso del ejemplo del callback hell se usan sólo callbacks)
• Dentro del setTimeout, en lugar de llamar a callback(), se usa resolve().
• En el último .then(), se debe pasar una función (() => console.log(...)) y no directamente el console.log(...),
porque si se escribe así se ejecuta inmediatamente, en vez de esperar a que terminen las tareas.
*/

function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 1 ejecutada");
      resolve();
    }, 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 2 ejecutada");
      resolve();
    }, 1000);
  });
}

function tarea3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 3 ejecutada");
      resolve();
    }, 1000);
  });
}

tarea1()
  .then(() => tarea2())
  .then(() => tarea3())
  .then(() => console.log("Todas las tareas cumplidas exitosamente"))
  .catch((error) => console.log(error));

/*

---------- Ejemplo con Callback Hell ----------

function tarea1(callback) {
  setTimeout(() => {
    console.log("Tarea 1 ejecutada");
    callback();
  }, 1000);
}

function tarea2(callback) {
  setTimeout(() => {
    console.log("Tarea 2 ejecutada");
    callback();
  }, 1000);
}

function tarea3(callback) {
  setTimeout(() => {
    console.log("Tarea 3 ejecutada");
    callback();
  }, 1000);
}

tarea1(() => {
  tarea2(() => {
    tarea3(() => {
      console.log("Todas las tareas terminadas con callback hell 👹");
    });
  });
});
*/
