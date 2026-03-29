// ====================================================================
//      Resolviendo y rechazando promesas // .then & .catch
// ====================================================================

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random().toFixed(1); // .toFixed(1) deja sólo un decimal y redondea!!!

    if (num >= 0.5) {
      resolve(`¡Éxito! ${num} es >= 0.5`);
    } else {
      reject(`Error: ${num} es < 0.5`);
    }
  }, 2000);
});

// Consumir la promesa con .then(resultado) y .catch(error)
// Recordar que resultado y error no son palabras reservadas, puede ser cualquier nombre
miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
