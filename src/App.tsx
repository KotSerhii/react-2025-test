import {Outlet} from "react-router-dom"
import './App.css'
import MenuComponent from "./components/menu/MenuComponent"

function App() {

    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    )
}

export default App
