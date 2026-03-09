import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {'Content-Type': 'application/json'},
})

export const getAll = async <T>(endpoint: string):Promise<T> => {
    const {data} = await axiosInstance.get<T>(endpoint);
    return data;
}
