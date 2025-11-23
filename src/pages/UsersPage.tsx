import { Outlet } from "react-router-dom";
import UsersComponent from "../components/users-component/UsersComponent";

const UsersPage = () => {

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;