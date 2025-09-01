import {useEffect, useState} from 'react';
import type {IProduct} from "../../models/Product";
import {loadProducts} from "../../services/api.service";
import Product from "../product-component/Product";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        loadProducts().then(value => setProducts(value));
    }, []);
    return (
        <div>
            {
                products.map(product => (<Product product={product} key={product.id}/>))
            }
        </div>
    );
};

export default Products;