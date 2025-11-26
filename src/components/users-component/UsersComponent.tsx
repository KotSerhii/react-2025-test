import {useEffect, useState } from "react";
import type { IUser } from "../../models/IUser";
import { getUsers } from "../../services/api.service";
import UserComponent from "../user-component/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
            .then(response=>setUsers(response.users))

    }, []);
    return (
        <div>
            users-component
            {users.map(user => (<UserComponent item={user} key={user.id} />))}
        </div>
    );
};

export default UsersComponent;