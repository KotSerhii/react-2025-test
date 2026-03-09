import {getAll} from "../services/api.services.ts";
import type {IUser} from "../models/IUser.ts";


const UsersPage = () => {
    getAll<IUser[]>('/users')
    return (
        <div>

        </div>
    );
};

export default UsersPage;