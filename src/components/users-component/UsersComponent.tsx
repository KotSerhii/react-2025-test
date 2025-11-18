import {useEffect, useState } from "react";
import type { IUser } from "../../models/IUser";
import { userService } from "../../services/api.service";
import type { IGeneralResponseForUser } from "../../models/IGeneralResponseForUser";
import UserComponent from "../user-component/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
userService.getAllUsers()
    .then(({users}:IGeneralResponseForUser)=>{setUsers(users)});

    }, []);
    return (
        <div>
            {users.map((user: IUser) => (<UserComponent key={user.id} item={user} />))}
        </div>
    );
};

export default UsersComponent;