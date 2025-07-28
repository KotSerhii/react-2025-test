import {useState, useEffect} from 'react';
import type {IUser} from '../../models/IUser';
import UserComponent from '../UserComponent/UserComponent'
import {getUsers} from '../../services/api.service';

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
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