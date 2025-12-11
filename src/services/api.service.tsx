import axios from "axios";
import type {LoginData} from "../models/LoginData.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

export const login = async ({username, password, expiresInMins}: LoginData):Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins
    });
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
    return userWithTokens;
}