import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((users) => users.json())
        .then((users) => setUsers(users));
    }, []);
    console.log("Users");
    return (
        <div>
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;