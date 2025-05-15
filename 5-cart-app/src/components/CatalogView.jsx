import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardItem } from "./ProductCardItem";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const findAll = async() =>{
        const produs = await getProducts();
        setProducts(produs);
        setIsLoading(false);
    }

    useEffect(() => {
        findAll();
    }, [])


    return (<>
        {
            isLoading && <div className="alert-info alert"> Cargando....</div>
        }
        <div className="row">
            {products.map(product => (
                <div className="col-4 my-2" key={product.id}>
                    <ProductCardItem 
                        handler={handler}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                </div>
            ))}

        </div>
    </>)
}