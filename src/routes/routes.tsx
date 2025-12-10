import AuthResourcesPage from "../pages/AuthResoursesPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";

import {createBrowserRouter} from "react-router-dom"

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'auth/resources', element: <AuthResourcesPage/>},
        ]
    }
])