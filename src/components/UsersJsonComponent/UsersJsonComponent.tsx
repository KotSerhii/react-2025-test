import {useEffect, useState } from "react";
import type { IUserJson } from "../../models/Jsonplaceholder/IUserJson";


const UsersJsonComponent = () => {
    const [users, setUsers] = useState<IUserJson[]>([]);
    useEffect(() => {


    }, []);
    return (
        
        <div>

        </div>
    );
};

export default UsersJsonComponent;