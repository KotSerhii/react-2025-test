import { Outlet } from "react-router-dom"
import './App.css'
import Menu from "./components/Menu/Menu"

function App() {

    return (
        <>
            <Menu/>
            This is App Component
            <Outlet/>
        </>
    )
}

export default App
