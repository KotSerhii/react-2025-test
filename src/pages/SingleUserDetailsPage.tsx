import { useLocation } from "react-router-dom";
import type { IUser } from "../models/IUser";


const SingleUserDetailsPage = () => {
    const {state} = useLocation();
    const user =state as IUser;
    return (                                            //тут повинен бути компонент!!! (зроблено для скорочення)
        <div>
            {user.email}
        </div>
    );
};

export default SingleUserDetailsPage;