import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";


export const routes= createBrowserRouter([
    {
        path:"", element:<Layout/>, children:[
            {index: true, element:<HomePage/>},
            {path:"users", element:<UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
])