import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

const routes = [{
    path: "", element:<MainLayout/>, children: [
        {path:'users',element:<UsersPage/>},
        {path:'users/1',element:<UserPage/>},
        {path:'posts',element:<PostsPage/>},

    ]
}];
export const router = createBrowserRouter(routes);