import type { IUsersDummyjsonResponse } from "../models/UsersDummyjsonResponse";


export const getUsers=async (page:string):Promise<IUsersDummyjsonResponse>=>{
    const limit = 30;
    const skip = limit*(+page - 1);
    return await fetch(import.meta.env.VITE_API_URL+'/users?skip='+skip)
        .then(value => value.json())

}