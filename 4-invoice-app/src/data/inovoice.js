
export const invoice ={
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'pepe',
        lastname: 'Doe',
        address:{
            country: 'USA',
            city:'Los Angeles',
            street: 'One Stret',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 123456
    },
    items:[
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 499,
            quantity:1
        },
        {
            id: 2,
            product: 'Corsair Keyboard',
            price: 150,
            quantity:1
        },{
            id: 3,
            product: 'Monitor Asus',
            price: 300,
            quantity:1
        },
    ],
}