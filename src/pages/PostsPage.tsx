import {Link, Outlet } from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/posts/dummyjson'}>Posts from dummyjson</Link></li>
                <li><Link to={'/posts/jsonplaceholder'}>Posts from jsonplaceholder</Link></li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default PostsPage;