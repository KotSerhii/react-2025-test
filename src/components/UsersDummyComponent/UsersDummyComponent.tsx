import {useEffect, useState } from "react";
import type { IUserDummyjson } from "../../models/Dummyjson/IUserDummyjson";
import { infoService } from "../../services/api.services";
import UserDummyComponent from "../UserDummyComponent/UserDummyComponent";

const UsersDummyComponent = () => {

    const [users, setUsers] = useState<IUserDummyjson[]>([]);
    useEffect(() => {
        infoService.getAllUsersDummyjson().then(users => {setUsers(users)});
    }, []);

    return (
        <div>
            {users.map((user)=>(<UserDummyComponent item={user} key={user.id} />))}
        </div>
    );
};

export default UsersDummyComponent;