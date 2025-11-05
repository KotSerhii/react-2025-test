import { urls } from "../constants/urls";
import type { IUserJson } from "../models/Jsonplaceholder/IUserJson";

export const infoService={
    getAllUsersJson:async():Promise<IUserJson> => {
    return await fetch(urls.users.allUsersFromJson)
        .then(value => value.json())

    },
}