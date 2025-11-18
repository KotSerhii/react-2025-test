import type { IGeneralResponseForUser } from "../models/IGeneralResponseForUser";



const baseURL = import.meta.env.VITE_BASE_URL;

export const userService={
    getAllUsers:async ():Promise<IGeneralResponseForUser> => {
        return await fetch(baseURL+"/users")
            .then(value => value.json());
    }
};