import type { IGeneralResponseCarts } from "../models/IGeneralResponseCarts";
import type { IGeneralResponseForUser } from "../models/IGeneralResponseForUser";



const baseURL = import.meta.env.VITE_BASE_URL;

export const userService={
    getAllUsers:async ():Promise<IGeneralResponseForUser> => {
        return await fetch(baseURL+"/users")
            .then(value => value.json());
    }
};


export const cartsService={
    getAllCarts:async (userId: string):Promise<IGeneralResponseCarts> => {
        return await fetch(baseURL+'/carts/user/'+userId)
        .then(carts => carts.json());
    }
}