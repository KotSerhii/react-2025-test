import {useEffect} from "react";
import {loadAuthProducts, refreshToken} from "../services/api.service.tsx";

const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products)
        })
            .catch(reason => {
                console.log(reason);
                refreshToken()
                    .then(() => loadAuthProducts())
                    .then(products => console.log(products));
            })
    }, []);

    return (
        <div>
            Resources Page
        </div>
    );
};

export default AuthResourcesPage;