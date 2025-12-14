import {useEffect} from "react";
import {loadAuthProducts, refreshToken} from "../services/api.service.tsx";

const AuthResourcesPage = () => {
// робимо запит на отримання данних з серверу loadAuthProducts(), якщо сервер верне помилку, тоді підхоплюємо її .catch(reason...,
// та в цьому .catch викликаємо ф-цію refreshToken() для оновлення токенів та одразу робимо повторний ГЕТ запит loadAuthProducts()
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