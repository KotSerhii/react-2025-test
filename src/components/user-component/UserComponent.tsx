import type { FC } from "react";
import type { IUser } from "../../models/IUser";
import { useNavigate} from "react-router-dom";

type UserPropsType= {
    item:IUser;
}

const UserComponent:FC<UserPropsType> = ({item}) => {
    const navigation = useNavigate();


     const handlerOnClickNavigate=()=> {
        navigation('/users/'+item.id+'/carts')
    }

    return (
        <div>
            {item.firstName} {item.email}
            <button onClick={handlerOnClickNavigate} className={'border-1 bg-neutral-200'}> carts </button>
        </div>
    );
};

export default UserComponent;