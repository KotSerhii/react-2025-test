import type { IProduct } from "../models/Product";
import type { IProductsResponseDummyjson } from "../models/ProductsResponseDummyjson";

const endpointProducts = import.meta.env.VITE_API_BASE_URL+'/products&limit=0';

const loadProducts =async ():Promise<IProduct[]> => {
const response: IProductsResponseDummyjson = await fetch(endpointProducts)
    .then(value => value.json())
    return response.products;
}

export {loadProducts};