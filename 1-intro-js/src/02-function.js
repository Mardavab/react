
const sayHey = (name = "cristian") => `hola mundoouu ${name}`;
const add = (a = 0,b=0) => a+b;


const resulat = sayHey();

console.log(sayHey("David"));
console.log(resulat);
console.log(add());

