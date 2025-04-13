
const products = ['mesa', 'silla', 'notebook', 'teclado'];
products.push('pantalla lcd', 'sony tv');

const fruits = ['peras', 'manzanas', 'sandias'];

const mercado = [...fruits, ...products, 'lechuga', 'papas', 'uvas'] ;

mercado.forEach(el =>console.log(el));