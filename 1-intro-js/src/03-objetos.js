
const invoice = {
    id: 10,
    name: 'compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name:'Jhoan',
        lastname:'Doe',
        age: 20
    },
    items:[
        {
            product: 'keyboard',
            price: 398,
            quantity: 2,
        },
        {
            product: 'mouse',
            price: 200,
            quantity: 1,
        },
        {
            product: 'paper',
            price: 89,
            quantity: 20,
        },
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item=>{
            total = total+item.price * item.quantity
        });
        return total;
    }, 
    greeting: function () {
        return `Hola ${this.client.name}`;
    }
};


const greeting = invoice.greeting();
console.log(greeting);
console.log(`total = ${invoice.total()}`);

