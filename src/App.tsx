import './App.css'
import {useState} from 'react';
function App() {
    let [counter, setCounter] = useState<number>(0);

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={()=>{
                setCounter(++counter);
            }}>increment</button>
            <button onClick={()=>{
                setCounter((prevState:number)=>{return --prevState});
            }}>decrement</button>
        </>
    )
}

export default App
