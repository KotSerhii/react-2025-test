import type { ICart } from "./ICart";


 export interface IGeneralResponseCarts {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}