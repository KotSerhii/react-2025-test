import {createContext} from "react";


type MyContextType = {
theme: string;
changeTheme: (theme: string) => void;
}

const defaultValue: MyContextType = {
    theme:'light',
    changeTheme:(theme)=>{
        console.log(theme);
    }
};
export const MyContext=createContext<MyContextType>(defaultValue)

// Будуємо ф-цію createContext в змінну MyContext, робимо типізацію type MyContextType, та вводимо дефолтні значення
// const defaultValue: MyContextType (це вимагає від нас TS)