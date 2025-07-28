import {useState, useEffect} from 'react';
import type {IUser} from '../../models/IUser';
import UserComponent from '../UserComponent/UserComponent'
import {getUsers} from '../../services/api.service';

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser|null>(null);
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });

        return () => {
            console.log('done');
        }
    }, []);
    const foo = (item:IUser) => {
        setItem(item);
    }
    return (
        <div>
            {
            item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;