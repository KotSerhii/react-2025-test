import {Link, Outlet } from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Link to={'/comments/jsonplaceholder'}>Comments Page</Link>

            <Outlet/>

        </div>
    );
};

export default CommentsPage;