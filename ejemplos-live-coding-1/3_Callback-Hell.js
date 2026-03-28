// ====================================================================
//                          CALLBACK HELL
// ====================================================================

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
