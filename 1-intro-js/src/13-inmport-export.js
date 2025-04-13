import invoiceByClientName,  {invoices } from "./data/invoices";

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

console.log(invoiceByClientName('maria'));
