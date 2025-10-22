import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import SingleUserDetailsPage from "../pages/SingleUserDetailsPage";


export const routes= createBrowserRouter([
    {
        path:"", element:<Layout/>, children:[
            {index: true, element:<HomePage/>},
            {path:"users", element:<UsersPage/>, children:[
                {path:"posts/:userId", element:<PostsPage/>}]},
            {path:"users/details", element:<SingleUserDetailsPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
])