import {useEffect, useState } from "react";
import type { IUser } from "../../models/IUser";
import { useSearchParams } from "react-router-dom";
import { getAllUsers } from "../../services/api.service";
import UserComponent from "../user-component/UserComponent";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();

    useEffect(() => {
const page = +(query.get('pg') || 1);
if(page>0 && page<3){
        getAllUsers(page.toString()).then(value => setUsers(value.data))}
    }, [query])
    return (
        <div>
            {users.map((user: IUser) => (<UserComponent item={user} key={user.id}/>))}

        </div>
    );
};

export default UsersComponent;