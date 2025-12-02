import axios from "axios";
import type {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json'}
})

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

axiosInstance.interceptors.request.use((request) => {
    request.headers.set('MyHeader', 'VasIsDas'); // можна додати свій хедер при відправці запросу
    console.log(request);
    return request;
})
axiosInstance.interceptors.response.use((response) => {
    console.log(response);
    return response;
})

export const saveUser = async (user:IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>('/users', user)
    return data;
}