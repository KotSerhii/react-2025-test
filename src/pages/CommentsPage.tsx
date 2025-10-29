import { Outlet } from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            Comments Page
            <Outlet/>
        </div>
    );
};

export default CommentsPage;