import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";

export const BAA = () => {

    const {changeTheme}=useContext(MyContext);

    function handlerLight() {
        changeTheme('light');
    }

    function handlerDark() {
        changeTheme('dark');
    }

    return (
        <div>
            <button onClick={handlerLight}>Change theme on light</button>
            <button onClick={handlerDark}>Change theme on dark</button>
        </div>
    );
};