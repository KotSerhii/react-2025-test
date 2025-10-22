import {useEffect, useState } from "react";
import type { IUser } from "../../models/IUser";
import UserComponent from "../UserComponent/UserComponent";
import { userService } from "../../services/api.service";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getUsers().then((allUsers)=> {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent item={user} key={user.id} />)}
        </div>
    );
};

export default UsersComponent;