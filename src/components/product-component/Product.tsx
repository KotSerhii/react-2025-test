import {useState, type FC} from 'react';
import type {IProduct} from "../../models/Product";

type ProductPropsType = {
    product: IProduct;
}

const Product: FC<ProductPropsType> = ({product}) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    return (
        <div className="border rounded-xl m-2 p-4 shadow-md max-w-sm">
            <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover rounded-lg'/>
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <p className="text-gray-500">{product.brand}</p>
            <p className='text-lg font-semibold mt-2'>{product.price}</p>
            <p className="text-yellow-500">⭐{product.rating}</p>
            <button
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide details" : "Show details"}
            </button>

            {showDetails && (
                <div className="mt-3 text-sm text-gray-700">
                    <p>{product.description}</p>
                    <p className="mt-2">Stock: {product.stock}</p>
                    <p>Category: {product.category}</p>
                </div>
            )}
        </div>
    );
};

export default Product;