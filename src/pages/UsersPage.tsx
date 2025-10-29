import { Outlet } from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            Users Page
            <Outlet/>
        </div>
    );
};

export default UsersPage;