import type { IProduct } from "./Product";


export interface IProductsResponseDummyjson {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}