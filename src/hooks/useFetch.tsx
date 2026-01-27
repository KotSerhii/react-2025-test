// для будови власного хука треба до назви ф-ції додати use..., і вкласти свою логіку, інші хуки тощо, в нашому
// випадку це кастомний хук useFetch

import {useEffect, useState} from "react";

export const useFetch=()=>{
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((users) => users.json())
            .then((users) => setUsers(users));
    }, []);
    return users;
};