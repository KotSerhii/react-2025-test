import {type FC} from 'react';
import type {IProduct} from "../../models/IProduct.ts";

type MyPropsType = {
    product: IProduct
}

const Product: FC<MyPropsType> = ({product}) => {
    return (
        <div>

                <h2>{product.title}. {product.price} uah</h2>
                <img src= {product.image}  alt= {product.title}/>

        </div>
    );
};

export default Product;