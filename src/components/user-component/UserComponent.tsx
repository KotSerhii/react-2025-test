import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    item:IUser
}

const UserComponent:FC<UserPropsType> = ({item}) => {


    return (
        <div>
            id:{item.id} - username:{item.username} - name:{item.name}
        </div>
    );
};

export default UserComponent;