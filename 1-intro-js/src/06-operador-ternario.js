const average = 5.9;
const status = (average>=5.5) ? 'Aprobado' : 'Rechazado';

console.log(`Resultado: ${status}`);

let max = 0;
const a = 12;
const b = 8;
const c = 3;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es: ${max}`);
