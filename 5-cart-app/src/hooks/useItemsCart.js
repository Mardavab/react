import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { UpdateQuantityProductCart, AddProductCart, DeleteProductCart} from "../reducer/itemsAction";


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
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

    return{
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct
    }
};