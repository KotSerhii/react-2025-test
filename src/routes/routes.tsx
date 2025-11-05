import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CommentsFromJsonPage from "../pages/CommentsFromJsonPage";
import CommentsPage from "../pages/CommentsPage";
import PostsFromDummyPage from "../pages/PostsFromDummyPage";
import PostsFromJsonPage from "../pages/PostsFromJsonPage";
import PostsPage from "../pages/PostsPage";
import UsersFromDummyPage from "../pages/UsersFromDummyPage";
import UsersFromJsonPage from "../pages/UsersFromJsonPage";
import UsersPage from "../pages/UsersPage";
import HomePage from "../pages/HomePage";
import CommentsFromDummyPage from "../pages/CommentsFromDummyPage";

export const routes= createBrowserRouter([{
    path:"/",element:<App/>,children:[
        {index:true,element:<HomePage/>},
        {   path:"/users", element:<UsersPage/>,children:[{
            path:"/users/jsonplaceholder", element: <UsersFromJsonPage/>},
            {path: "/users/dummyjson", element: <UsersFromDummyPage/>
        }]},
        {path:"/posts", element:<PostsPage/>,children:[
            {path:"/posts/jsonplaceholder", element: <PostsFromJsonPage/>},
            {path: "/posts/dummyjson", element: <PostsFromDummyPage/>}
]
    },
        {path:"/comments", element:<CommentsPage/>,children:[
                {path:"/comments/jsonplaceholder", element: <CommentsFromJsonPage/>},
                {path:"/comments/dummyjson", element: <CommentsFromDummyPage/>}

    ]}
]}])