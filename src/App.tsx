import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {
    const [themeColor, setThemeColor] = useState<string>('light');
    //формуємо useState для збереження кольору нашої теми, після цього themeColor можемо використовувати будь де.
    return (
        <>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) =>
                    setThemeColor(themeValue)
            }}>

                <A/>
                <B/>
            </MyContext.Provider>
        </>
        // <MyContext.Provider value={{ вводимо дефолтні значення, theme: themeColor - підтягуємо значення зі state,
        // сама функція:
        // changeTheme: (themeValue: string) =>
        //                     setThemeColor(themeValue)
        // змінює колір теми та викликаємо її в компоненті ВАА, а змінюємо колір в компоненті ААА
    )
}

export default App
