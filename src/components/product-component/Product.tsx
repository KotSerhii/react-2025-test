import {useState, type FC} from 'react';
import type {IProduct, IReviews} from "../../models/Product";

type ProductPropsType = {
    product: IProduct;
}

const Product: FC<ProductPropsType> = ({product}) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    return (
        <div className="border rounded-xl m-2 p-4 shadow-md max-w-sm">

            {/*------------------------- Main info ----------------------------*/}
            <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover rounded-lg'/>
            <h2 className="text-xl font-bold mt-2">{product.title}</h2>
            <p className="text-gray-500">{product.brand}</p>
            <p className='text-lg font-semibold mt-2'>${product.price}</p>
            <p className="text-yellow-500">⭐{product.rating}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>SKU: {product.sku}</p>
            <p>Weight: {product.weight} g</p>
            <p>
                Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
            </p>
            <p>Warranty: {product.warrantyInformation}</p>
            <p>Shipping: {product.shippingInformation}</p>
            <p>Status: {product.availabilityStatus}</p>
            <p>Minimum order: {product.minimumOrderQuantity}</p>
            <p>Return policy: {product.returnPolicy}</p>

            {/*------------------------- Tags ---------------------------------*/}
            <div className='mt-2'>
                <h3 className='font-semibold'>Tags:</h3>
                <ul className='flex gap-2 flex-wrap mt-1'>
                    {product.tags.map((tag: string, index: number) => (
                        <li key={index} className='bg-gray-200 px-2 py-1 rounded'>{tag}</li>
                    ))}
                </ul>
            </div>

            {/*----------------------- Reviews ----------------------------*/}
            <div className='mt-4'>
                <h3 className='font-semibold'>Reviews:</h3>
                {
                    product.reviews.map((review: IReviews, index: number) => (
                        <div key={index} className='border-t pt-2 mt-2'>
                            <p>{review.reviewerName} - {review.rating}⭐</p>
                            <p>{review.reviewerEmail}</p>
                            <p>{review.comment}</p>
                            <p>{new Date(review.date).toLocaleDateString()}</p>

                        </div>
                    ))
                }
            </div>

            {/*--------------------- Meta -----------------------*/}
            <div className="mt-4">
                <h3 className='font-semibold'>Meta:</h3>
                <p>Barcode: {product.meta.barcode}</p>
                <p>Created: {new Date(product.meta.createdAt).toLocaleString()}</p>
                <p>Updated: {new Date(product.meta.updatedAt).toLocaleString()} </p>
                <img src={product.meta.qrCode} alt="QR Code" className='w-20 mt-2'/>
            </div>

            {/*---------------- Images -----------------------*/}

            <div className='mt-4'>
                <h3 className='font-semibold'>Images:</h3>
                <div className='flex gap-2 flex-wrap mt-1'>
                    {product.images.map((image:string, index: number ) => (
                        <img src={image} alt={`img-${index}`} className='w-32 h-32 object-cover rounded'/>
                    ))}
                </div>
            </div>
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