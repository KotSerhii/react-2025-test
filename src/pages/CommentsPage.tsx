import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/comments/jsonplaceholder'}>Comments Page from json</Link></li>
                <li><Link to={'/comments/dummyjson'}>Comments Page from dummy</Link></li>
            </ul>

            <Outlet/>

        </div>
    );
};

export default CommentsPage;