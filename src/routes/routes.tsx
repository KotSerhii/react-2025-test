import App from "../App";

export const routes=[{
    path:"/",element:<App/>,children:[{
        path:"/users", element:<UsersPage/>,children:[{
            path:"/users/jsonplaceholder", element: <UsersFromJsonPage/>},
            {path: "/users/dummyjson", element: <UsersFromDummyPage/>
        }]},
        {path:"/posts", element:<PostsPage/>,children:[
            {path:"/posts/jsonplaceholder", element: <PostsFromJsonPage/>},
            {path: "/posts/dummyjson", element: <PostsFromDummyPage/>}
]
    },
        {path:"/comments", element:<CommentsPage/>,children:[
                {path:"/comments/jsonplaceholder", element: <CommentsFromJsonPage/>}
    ]}
]}]