import axios from "axios";
import type { ICar } from "../models/ICar";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1",
    headers: {"Content-Type": "application/json"},
})

export const getCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data;
}
export const addNewCar = async (car:ICar) => {
     await axiosInstance.post<ICar>('/cars', car);
}