import type { IUsersDummyjsonResponse } from "../models/UsersDummyjsonResponse";


export const getUsers=async ():Promise<IUsersDummyjsonResponse>=>{
    return await fetch(import.meta.env.VITE_API_URL+'/users')
        .then(value => value.json())

}