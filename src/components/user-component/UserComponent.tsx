import type { FC } from "react";
import type { IUser } from "../../models/IUser";
 type UserPropsType= {
     item:IUser;
}

const UserComponent:FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {item.first_name} {item.last_name} {item.email}
            <div><img src={item.avatar} alt={item.first_name}/></div>
        </div>
    );
};

export default UserComponent;