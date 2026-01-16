import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {
const memoCounter=useMemo(()=>{for(let i=0; i < 1000; i++) {
        console.log(i);
    }
    return null},[])
//застосовуємо useMemo, щоб при відпрацюванні Context не будувались зайвий раз 1000 ітерацій (в нашому випадку),
// це раціональне використання хука Memo
    return (
        <div>LeftBranch
        <LeftBranchA/>
        </div>
    );
};