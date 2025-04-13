const invoices = [
    {
        id: 1,
        name: 'compras de oficina',
        client: {
            name:'maria',
            lastname:'Doe',
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
        ]
    },{
        id: 2,
        name: 'compras de computador',
        client: {
            name:'pepe',
            lastname:'Doe',
        },
        items:[
            {
                product: 'keyboard',
                price: 398,
                quantity: 2,
            },
            {
                product: 'screen 17"',
                price: 800,
                quantity: 1,
            },
            {
                product: 'cpu intel',
                price: 1000,
                quantity: 10,
            },
        ]
    },{
        id: 3,
        name: 'compras de papeleria',
        client: {
            name:'Jhoan',
            lastname:'Doe',
        },
        items:[
            {
                product: 'pencil',
                price: 50,
                quantity: 1,
            },
            {
                product: 'paper',
                price: 100,
                quantity: 20,
            },
        ]
    },
];

const invoicesName = invoices.map( i => {
    return i.name;
})
const invoicesClient = invoices.map( i => {
    return i.client.name;
})
//console.log(invoicesName);
//console.log(invoicesClient);

const invoiceById = invoices.find( i =>i.id == 3)
console.log(invoiceById);

const invoiceFilter =  invoices.filter( i => i.id > 1);
console.log(invoiceFilter);

const invoiceDeleted =  invoices.filter( i => i.id !== 3);
console.log(invoiceDeleted);

const invoiceFilter2 =  invoices.filter( i => i.id > 1);
console.log(invoiceFilter2);

const result = invoices.some( i =>i.id == 3)
console.log(result);
