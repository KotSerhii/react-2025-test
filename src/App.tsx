import './App.css'
import MyComponent from "./components/MyComponent.tsx";
import MyOwnComponent from "./components/MyOwnComponent.tsx";

function App() {

    return (
        <>
            <MyComponent text={'Hello Guys!'}/>
            <MyComponent text={'Hello pups!'}/>
            <MyComponent text={'Hello candy!'}/>
            <MyComponent text={'Hello boys!'}/>
            <MyOwnComponent text={"That's true"}/>
        </>
    )
}

export default App
