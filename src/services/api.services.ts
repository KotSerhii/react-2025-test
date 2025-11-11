import {urls} from "../constants/urls";
import type {ICommentDummyjson} from "../models/Dummyjson/ICommentDummyjson";
import type { ICommentResponseDummyjson } from "../models/Dummyjson/ICommentResponseDummyjson";
import type {IPostDummyjson} from "../models/Dummyjson/IPostDummyjson";
import type {IPostResponseDummyjson} from "../models/Dummyjson/IPostResponseDummyjson";
import type {IUserDummyjson} from "../models/Dummyjson/IUserDummyjson";
import type {IUserResponseDummyjson} from "../models/Dummyjson/IUserResponseDummyjson";
import type {ICommentJson} from "../models/Jsonplaceholder/ICommentJson";
import type {IPostJson} from "../models/Jsonplaceholder/IPostJson";
import type {IUserJson} from "../models/Jsonplaceholder/IUserJson";

export const infoService = {
    getAllUsersJson: async (): Promise<IUserJson[]> => {
        return await fetch(urls.users.allUsersFromJson)
            .then(value => value.json())

    },
    getAllPostsJson: async (): Promise<IPostJson[]> => {
        return await fetch(urls.posts.allPostsFromJson)
            .then(value => value.json())

    },
    getAllCommentsJson: async (): Promise<ICommentJson[]> => {
        return await fetch(urls.comments.allCommentsFromJson)
            .then(value => value.json())

    },
    getAllUsersDummyjson: async (): Promise<IUserDummyjson[]> => {
        const {users}: IUserResponseDummyjson = await fetch(urls.users.allUsersFromDummyjson)
            .then(value => value.json())
        return users;
    },
    getAllPostsDummyjson: async (): Promise<IPostDummyjson[]> => {
        const {posts}: IPostResponseDummyjson = await fetch(urls.posts.allPostsFromDummyjson)
            .then(value => value.json())
        return posts;
    },
    getAllCommentsDummyjson: async (): Promise<ICommentDummyjson[]> => {
        const {comments}: ICommentResponseDummyjson = await fetch(urls.comments.allCommentsFromDummyjson)
            .then(value => value.json())
        return comments;

    },


}