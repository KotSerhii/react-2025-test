import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";


const UsersComponent = () => {
    const [users, setUsers] = useState([])
// використання хука useCallback(огортаємо ф-цію), додаємо deps.[], в цьому випадку ререндерінг компонента UserComponent, в
    // який передаємо foo, не відбувається
    const foo = useCallback(()=>{
        console.log("foo");
    },[]);

    // const arr: number[] = [11, 22, 33];
    // коли ми хочемо передати масив в інший компонент, та закешувати його так само, як функцію foo, треба використати
    // хук useMemo(..., deps.[]), але синтаксис буде наступний:

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    },[]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((users) => users.json())
        .then((users) => setUsers(users));
    }, []);
    console.log("Users");
    return (
        <div>
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;