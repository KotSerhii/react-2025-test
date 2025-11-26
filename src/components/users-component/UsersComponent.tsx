import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";
import UserComponent from "../user-component/UserComponent";
import {useSearchParams} from "react-router-dom";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams({page: '1'});
    const currentPage = query.get("page") || '1';
    useEffect(() => {
        getUsers(currentPage)
            .then(response => setUsers(response.users))

    }, [currentPage]);
    return (
        <div>
            {users.map(user => (<UserComponent item={user} key={user.id}/>))}
        </div>
    );
};

export default UsersComponent;