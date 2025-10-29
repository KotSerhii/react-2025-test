import { Outlet } from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            Posts Page
            <Outlet/>
        </div>
    );
};

export default PostsPage;