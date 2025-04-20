import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastname: '',
        address: {
            country: '',
            city: ' ',
            street: ' ',
            number: 0
        }
    },
    company: {
        name: ' ',
        fiscalNumber: 0
    },
    items: [],
    total: 0
}
export const InvoiceApp = () => {

    const [activeForm, setActiveForm] = useState(false);
    const [total, setTotal] = useState(0);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(4);
    const { id, name, client, company } = invoice;


    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                const data = await getInvoice();
                setInvoice(data);
                setItems(data.items);
            } catch (error) {
                console.error("Error loading invoice:", error);
            }
        };
        fetchInvoice();
    }, []);

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])

    const onActiveForm = () =>{

        setActiveForm(!activeForm);
    }


    const handlerAddItems = ({product, price, quantity}) => {

        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: +quantity.trim()
        }]);

        setCounter(counter + 1)
    }

    const handlerDeleteItem = (id) =>{
        setItems(items.filter( item => item.id !== id));
    }

return (
    <>

        <div className="container">
            <div className="card my-3">
                <div className="card-header">Ejemplo Facura</div>
                <div className="card-body">
                    <InvoiceView id={id} name={name} />
                    <div className="row my-3">
                        <div className="col">
                            <ClientView title={'Datos del cliente'} client={client} />
                        </div>
                        <div className="col">
                            <CompanyView title={'Datos de la empresa'} company={company} />
                        </div>

                    </div>

                    <ListItemView handlerDeleteItem={id => handlerDeleteItem(id)} title='Datos de la factura' items={items} />
                    <TotalView total={total} />
                    <button className="btn btn-secondary" 
                    onClick={onActiveForm}>{!activeForm? 'Agregar Item': 'Ocultar Item'}</button>
                    {!activeForm || <FormItemsView handler={handlerAddItems}/>}
                </div>
            </div>
        </div>

    </>
);
}