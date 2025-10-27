import {createRoot} from 'react-dom/client'
import './index.css'

import {BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import UsersComponent from "./components/Users/UsersComponent"
import PostsComponent from "./components/Posts/PostsComponent"
import CommentsComponent from "./components/Comments/CommentsComponent"
import ProductsComponent from "./components/Products/ProductsComponent"


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route index={true} element={<App/>}/>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostsComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
        </BrowserRouter>)
