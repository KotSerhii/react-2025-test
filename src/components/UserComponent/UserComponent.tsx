import type {FC}  from "react";
import type {IUser} from '../../models/IUser';

type UserPropType = {
    item: IUser;
    foo: (item:IUser)=>void
}

const UserComponent:FC<UserPropType> = ({item, foo}) => {
    return (
        <div>
            {item.name}
            <button onClick={()=>{
                foo(item);
            }}>details</button>
        </div>
    );
};

export default UserComponent;