import {useEffect, useState} from "react";
import type {IUserJson} from "../../models/Jsonplaceholder/IUserJson";
import {infoService} from "../../services/api.services";
import UserJsonComponent from "../UserJsonComponent/UserJsonComponent";


const UsersJsonComponent = () => {
    const [users, setUsers] = useState<IUserJson[]>([]);
    useEffect(() => {
        infoService.getAllUsersJson()
            .then((allUsers) => {
                setUsers(allUsers)
            })

    }, []);
    return (

        <div>
            {users.map((user: IUserJson) => (<UserJsonComponent item={user} key={user.id}/>))}
        </div>
    );
};

export default UsersJsonComponent;