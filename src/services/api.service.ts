import { urls } from "../constants/urls";
import type { IPost } from "../models/IPost";
import type { IUser } from "../models/IUser";

export const userService={
    getUsers:async ():Promise<IUser[]> => {
    return await fetch(urls.users.allUsers)
        .then(value=>value.json())
    },
getUser:async (id:number) => {
        return await fetch(urls.users.byID(id))
            .then(value=>value.json())
}
}
export const postService={
    getAllPostsOfUsersById:async (id:number):Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsByID(id))
        .then(value=>value.json())
    }
}