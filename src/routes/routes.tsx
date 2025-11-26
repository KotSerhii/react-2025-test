import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PaginationLayout from "../layouts/PaginationLayout";
import UsersPage from "../pages/UsersPage";

export const routes =createBrowserRouter(
    [
        {path:"/", element:<MainLayout/>, children:[
            {path:"", element:<PaginationLayout/>, children:[
                    {path:"users", element:<UsersPage/>}
                ]}
            ]}
    ]
)
