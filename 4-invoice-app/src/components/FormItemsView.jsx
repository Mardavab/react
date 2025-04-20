import { useState } from "react";

export const FormItemsView = ({handler}) => {

    const [formItemState, setFormItemState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemState

    const onInputChange = ({ target: { name, value } }) => {
        setFormItemState({
            ...formItemState,
            [name]: value
        });
    }

    const onInvoiceItemsSubmit = (event) => {
        {
            event.preventDefault();

            if (product.trim().length <= 1) return;
            if (price.trim().length <= 1) return;
            if (isNaN(price.trim())) {
                alert('El Precio no es un numero');
                return;
            };
            if (quantity.trim().length < 1) return;
            if (isNaN(quantity.trim())) {
                alert('La cantidad no es un numero');
                return;
            };

            handler(formItemState);

            setFormItemState({
                product: '',
                price: '',
                quantity: ''
            });
        }
    }

    return (<>
        <form className="w-50 " onSubmit={onInvoiceItemsSubmit}>
            <input
                type="text"
                className="form-control m-3"
                value={product}
                name="product"
                onChange={onInputChange}
                placeholder="Producto" />
            <input
                type="text"
                value={price}
                className="form-control m-3"
                name="price"
                onChange={onInputChange}
                placeholder="Precio" />
            <input
                type="text"
                value={quantity}
                className="form-control m-3"
                name="quantity"
                onChange={event => onInputChange(event)}
                placeholder="Cantidad" />
            <button
                className="btn-primary btn m-3"
                type="submit">
                Crear Item
            </button>
        </form>
    </>)
}