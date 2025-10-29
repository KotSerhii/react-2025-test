import { Outlet } from "react-router-dom"
import './App.css'
import Menu from "./components/menu/Menu"

function App() {

    return (
        <>
            <Menu/>
<hr/>
            <Outlet/>
        </>
    )
}

export default App
