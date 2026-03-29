// =====================================
//            Promesas
// =====================================

// Las promesas en JS son objetos que representan el resultado futuro de una operación asíncrona.
// Te permiten manejar tareas que tardan en completarse (como pedir datos a un servidor) 
// de manera más clara y ordenada que los antiguos callbacks.

// 🔑 Conceptos básicos
// • Promise = un objeto que representa un valor que estará disponible en el futuro.
// • Estados posibles:
// 	  ◦ Pending (pendiente): la operación aún no terminó.
// 	  ◦ Fulfilled (resuelta): la operación terminó con éxito y devuelve un valor.
// 	  ◦ Rejected (rechazada): la operación falló y devuelve un error.

// 👉 Analogía: pedir una pizza por teléfono. El número de pedido es la promesa. No es la pizza,
// pero garantiza que recibirás un resultado: la pizza llega (fulfilled) o te dicen que no pueden entregarla (rejected).

// Este código no se ejecuta bien, es sólo un ejemplo ilustrativo de Copilot
// fetch("https://api.example.com/data")
// .then(response => response.json())   // se ejecuta si la promesa se cumple
// .then(data => console.log(data))     // encadenar más pasos
// .catch(error => console.error(error)); // se ejecuta si la promesa falla

// .then() → maneja el resultado exitoso.
// .catch() → maneja errores.
// .finally() → se ejecuta siempre, haya éxito o error.

const promesa = new Promise((resolve,reject)=>{
  setTimeout(()=> resolve("Éxito"), 2000);
});

promesa.then(mensaje=> console.log(mensaje));