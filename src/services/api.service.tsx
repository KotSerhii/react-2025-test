import axios from "axios";
import type {LoginData} from "../models/LoginData.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.tsx";
import type {ITokenPair} from "../models/ITokenPair.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
       return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins
    });
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
    return userWithTokens;
}
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products;
}

export const refreshToken = async () => {
    const IUserWithTokens=retrieveLocalStorage<IUserWithTokens>("user");
   const {data:{accessToken, refreshToken}} =  await axiosInstance.post<ITokenPair>('/refresh',
       {refreshToken: IUserWithTokens.refreshToken, expiresInMins:1})
    IUserWithTokens.refreshToken=refreshToken;
    IUserWithTokens.accessToken=accessToken;
    localStorage.setItem("user", JSON.stringify(IUserWithTokens));
}