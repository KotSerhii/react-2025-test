import {useState, useEffect} from 'react';
import type {IUser} from '../../models/IUser';
import UserComponent from '../UserComponent/UserComponent'

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {setUsers(response);
            });

        return () => {
            console.log('done');
        }
    }, []);

    return (
        <div>
            {
            users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;