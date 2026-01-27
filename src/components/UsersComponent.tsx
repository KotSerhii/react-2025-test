import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
// використання хука useCallback(огортаємо ф-цію), додаємо deps.[], в цьому випадку ререндерінг компонента UserComponent, в
    // який передаємо foo, не відбувається
    const foo = useCallback(()=>{
        console.log("foo");
    },[]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((users) => users.json())
        .then((users) => setUsers(users));
    }, []);
    console.log("Users");
    return (
        <div>
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;