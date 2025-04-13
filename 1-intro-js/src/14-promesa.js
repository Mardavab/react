import {findinvoiceById} from "./data/invoices";


//promise.then((result) =>{
//    console.log(`Realizando tareas con delay: ${result.name} `);  
//}).catch((error)=>console.log(error));

findinvoiceById(1)
    .then(console.log).
    catch(console.log);


 