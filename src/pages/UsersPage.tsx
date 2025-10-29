import {Link, Outlet } from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/users/jsonplaceholder"}>Users Page From Jsonplaceholder </Link></li>
                <li><Link to={"/users/dummyjson"}>Users Page From Dummyjson</Link></li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default UsersPage;