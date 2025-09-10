import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import APage from "./pages/APage"
import BPage from "./pages/BPage"
import MainPage from "./pages/MainPage"


const router=createBrowserRouter(
    [
        {
            path:'/',element:<MainLayout/>,          //path - початкова url, MainLayout-головний основний компонент
            children:                                //дочірні елементи, які з'являються після "/"
            [
                {path:'a',element:<APage/>},         // тобто path - це URL, a element - відображається в Outlet
                {path:'b',element:<BPage/>},
                {path:'',element:<MainPage/>},
            ]
        },

    ]
)
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
