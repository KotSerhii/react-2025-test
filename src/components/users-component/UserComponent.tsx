import type { IUser } from "../../models/IUser";

interface IUserComponentProps {
    item: IUser
}

const UserComponent = ({item}: IUserComponentProps) => {
    return (
        <div>
            {item.firstName} {item.lastName}
        </div>
    );
};

export default UserComponent;