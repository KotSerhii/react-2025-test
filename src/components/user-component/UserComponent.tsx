import type { FC } from "react";
import type { IUser } from "../../models/IUser";

type UserPropsType= {
    item:IUser;
}

const UserComponent:FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {item.firstName} {item.email}
        </div>
    );
};

export default UserComponent;