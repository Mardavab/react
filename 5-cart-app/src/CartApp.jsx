import { useEffect, useReducer } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./reducer/itemsAction";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if (hasItem) {
            dispatch({
                type: UpdateQuantityProductCart,
                payload: product
            })
        } else {
            dispatch({
                type: AddProductCart,
                payload: product
            })
        }
    }

    const handlerDeleteProduct = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id
        })
    }
    return (<>

        <div className="container">

            <h2 className="my-2">Cart App</h2>
            <CatalogView handler={handlerAddProductCart} />

            {cartItems?.length <= 0 || (<div className="my-4 w-50">
                <CartView handlerDelete={handlerDeleteProduct} items={cartItems} />
            </div>)}

        </div>
    </>);
}