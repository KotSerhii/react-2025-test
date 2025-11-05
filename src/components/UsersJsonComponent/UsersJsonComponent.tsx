import {useEffect, useState } from "react";
import type { IUserJson } from "../../models/Jsonplaceholder/IUserJson";
import { infoService } from "../../services/api.services";


const UsersJsonComponent = () => {
    const [users, setUsers] = useState<IUserJson[]>([]);
    useEffect(() => {
infoService.getAllUsersJson().then(value => )

    }, []);
    return (
        
        <div>

        </div>
    );
};

export default UsersJsonComponent;