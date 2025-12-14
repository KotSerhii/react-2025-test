import axios from "axios";
import type {LoginData} from "../models/LoginData.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.tsx";
import type {ITokenPair} from "../models/ITokenPair.ts";

// запит на базовий URL в хедері не додаємо аутентифікацію, щоб передавати токен тільки при ГЕТ запиті
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})
// за допомогою інтерсептору перехоплюємо тільки запити на сервер, та при умові ГЕТ запиту додаємо токен в хедер (синтаксис запиту дивимось на сторінці сайту в документації)
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
       return requestObject;
})


// функція на логінацію - ПОСТ запит на сервер, отримуємо данні да деструктуруємо з АКСІОС (данні знаходяться в data) відповідь,
// далі ці данні зберігаємо в локал сторедж
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

// ГЕТ запит на отримання аутентифікованих данних по продуктам з сервера
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products;
}

// оновлення токенів- ПОСТ запит (див. документацію сервера), для цього данні витягаємо з ЛОКАЛ СТОРЕДЖ (використовуємо retrieveLocalStorage
// це необхідна функція для вирішення проблеми типізації данних при отриманні з LOCAL STORAGE). Після отримання данних з серверу
// перезаписуємо значення оновленних токенів та оновлюємо данні user in Local Storage
export const refreshToken = async () => {
    const IUserWithTokens=retrieveLocalStorage<IUserWithTokens>("user");
   const {data:{accessToken, refreshToken}} =  await axiosInstance.post<ITokenPair>('/refresh',
       {refreshToken: IUserWithTokens.refreshToken, expiresInMins:1})
    IUserWithTokens.refreshToken=refreshToken;
    IUserWithTokens.accessToken=accessToken;
    localStorage.setItem("user", JSON.stringify(IUserWithTokens));
}