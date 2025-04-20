import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/cartRoutes";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProduct } = useItemsCart();
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h2>Cart App</h2>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart} handlerDeleteProduct={handlerDeleteProduct}
                />
            </div>
        </>);
}