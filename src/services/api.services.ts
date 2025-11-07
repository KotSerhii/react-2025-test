import { urls } from "../constants/urls";
import type { ICommentJson } from "../models/Jsonplaceholder/ICommentJson";
import type { IPostJson } from "../models/Jsonplaceholder/IPostJson";
import type { IUserJson } from "../models/Jsonplaceholder/IUserJson";

export const infoService={
    getAllUsersJson:async():Promise<IUserJson[]> => {
    return await fetch(urls.users.allUsersFromJson)
        .then(value => value.json())

    },
    getAllPostsJson:async():Promise<IPostJson[]> => {
        return await fetch(urls.posts.allPostsFromJson)
            .then(value => value.json())

    },
    getAllCommentsJson:async():Promise<ICommentJson[]> => {
        return await fetch(urls.comments.allCommentsFromJson)
            .then(value => value.json())

    },

}