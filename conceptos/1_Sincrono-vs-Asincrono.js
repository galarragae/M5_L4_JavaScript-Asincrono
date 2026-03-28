// =====================================
// ⏳ Código síncrono (Bloqueante)
// =====================================
// Se ejecuta línea por línea, sin continuar hasta terminar la tarea actual.
console.log(`\n=====================================\nEjemplo Código Síncrono\n=====================================`);
console.log("Inicio");
for (let i = 0; i < 1000000000; i++) {} // Bloquea la ejecución
console.log("Fin");

//
// =====================================
// ⚡ Código Asíncrono (No bloqueante)
// =====================================
// Permite que el código continúe mientras espera que una tarea finalice.
console.log(`\n=====================================\nEjemplo Código Asíncrono\n=====================================`);
console.log("Inicio");
setTimeout(() => console.log("Tarea asíncrona completada"), 2000);
console.log("Fin");