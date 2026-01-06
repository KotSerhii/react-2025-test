import {createContext} from "react";
type MyContextType = {
    counterValue: number;
    increment: (obj:number) => void;
}

export const init = {
    counterValue:0,
    increment: (obj:number) => {
        console.log(obj);
    }
};
export const MyContext = createContext <MyContextType>(init);
// створюємо компонент MyContext для загального обміну інформацією між компонентами,
// за допомогою createContext та наповнюємо інформаціюєю, яку також типізуємо