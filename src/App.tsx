import './App.css'
import MyComponent from "./components/MyComponent.tsx";
import MyOwnComponent from "./components/MyOwnComponent.tsx";

function App() {

    return (
        <>
            <MyComponent title={'Hello Guys!'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MyComponent>
            <MyComponent title={'Hello pups!'}/>
            <MyComponent title={'Hello candy!'}/>
            <MyComponent title={'Hello boys!'}/>
            <MyOwnComponent text={"That's true"}/>
        </>
    )
}

export default App
