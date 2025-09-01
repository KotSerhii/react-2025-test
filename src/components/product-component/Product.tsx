import type { FC } from 'react';
import type { IProduct } from "../../models/Product";

type ProductPropsType = {
    product: IProduct;
}

const Product: FC<ProductPropsType> = ({product}) => {
    return (
        <div className="border rounded-xl p-4 shadow-md max-w-sm">
           <img src={product.thumbnail} alt={product.title}  className='w-full h-48 object-cover rounded-lg'/>
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <p className="text-gray-500">{product.brand}</p>

        </div>
    );
};

export default Product;