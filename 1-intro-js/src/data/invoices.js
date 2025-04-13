
 const papper={
    producto: 'papper',
    price:100,
    quantity:10
}
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
            papper
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
            papper,
        ]
    },
];

const invoiceById = (id) =>{
    return invoices.find( i =>i.id == id)

}

const invoiceByClientName = (clientName) =>{

    return invoices.find(i=>i.client.name === clientName)
}

const findinvoiceById = (id)=>{
    const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const result = invoiceById(id);
        if (result){
            resolve(result);
        }else{
            reject('Error: no existe la facura');
        }
    },2500)
});
    return promise;
}


export{
    papper,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findinvoiceById
}

