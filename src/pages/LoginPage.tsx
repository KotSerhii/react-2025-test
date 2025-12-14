import {useEffect} from "react";
import {login} from "../services/api.service.tsx";


const LoginPage = () => {
// виконуємо процес логінації (тут хардкод, в проекті буде форма)
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, [])
    return (
        <div>
            Login Page
        </div>
    );
};

export default LoginPage;