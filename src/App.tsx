import './App.css'
// import {LeftBranch} from "./components/LeftBranch.tsx";
// import {RightBranch} from "./components/RightBranch.tsx";
// import {init, MyContext} from "./context/MyContext.tsx";
// import {useState} from "react";
import UsersComponent from "./components/UsersComponent.tsx";

function App() {
// для формування MyContext необхідні компоненти огортаємо в MyContext.Provider та
    // передаємо через value значення з компоненти MyContext

   // const [counter, setCounter]=useState<number>(init.counterValue)
    console.log('APP');
    return (
        <>

            <UsersComponent/>
            {/*<MyContext.Provider value={{*/}
            {/*    counterValue:counter,*/}
            {/*    increment:(obj)=>{*/}
            {/*        setCounter(++obj);*/}
            {/*        console.log(obj);*/}
            {/*    }*/}
            {/*}}>*/}
            {/*    <LeftBranch/>*/}
            {/*    <RightBranch/>*/}
            {/*</MyContext.Provider>*/}
        </>
    )
}

export default App
