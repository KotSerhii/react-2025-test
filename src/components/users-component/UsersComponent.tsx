import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {

    const dispatch = useAppDispatch();

    const {users} = useAppSelector(({userSlice}) => userSlice)
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, [])

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;