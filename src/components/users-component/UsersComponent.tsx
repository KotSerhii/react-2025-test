import {useEffect, useState } from "react";
import type { IUser } from "../../models/IUser";
import { getAll } from "../../services/general.api.service";
import type { GeneralApiResponse } from "../../models/GeneralApiResponse";
import UserComponent from "./UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
      getAll<GeneralApiResponse & {users:IUser[]}>('/users').then(({users})=>setUsers(users));
    }, []);
    return (
        <div>
            {users.map((user: IUser) => (<UserComponent item={user} key={user.id}/>))}
        </div>
    );
};

export default UsersComponent;