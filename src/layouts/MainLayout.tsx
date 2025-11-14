import {Link, Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/users"}>users</Link>
                </li>
                <li>
                    <Link to={"/posts"}>posts</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default MainLayout;