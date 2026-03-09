import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: '/users', element: <UsersPage/>},
        {path: '/posts', element: <PostsPage/>},
        {path: '/comments', element: <CommentsPage/>}
    ]
}])