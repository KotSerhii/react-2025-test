import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UsersComponent from "../components/Users/UsersComponent";
import PostsComponent from "../components/Posts/PostsComponent";
import CommentsComponent from "../components/Comments/CommentsComponent";
import ProductsComponent from "../components/Products/ProductsComponent";

export const routes = createBrowserRouter([
    { path: '/', element:<App/>, children: [
            {path: 'users', element:<UsersComponent/>},
            {path: 'posts', element:<PostsComponent/>},
            {path: 'comments', element:<CommentsComponent/>},
            {path: 'products', element:<ProductsComponent/>},

        ]}
])