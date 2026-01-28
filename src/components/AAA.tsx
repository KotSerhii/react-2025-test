import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";
import './AAA.css'

export const AAA = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            this is the AAA component and the theme is - {theme}
        </div>
    );
};