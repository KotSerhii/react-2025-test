import {MyContext} from "../context/MyContext.tsx";
import {useContext} from "react";

export const LeftBranchA = () => {
    const{counterValue}=useContext(MyContext);
    return (
        <div>Left Branch A
        current counter is = {counterValue}
        </div>
    );
};