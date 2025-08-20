import type { IComment } from "../models/Comments";
import type { ICommentsResponseDummyjson } from "../models/CommentsResponseDummyjson";
import type {ITodo} from "../models/ITodo";
import type {ITodoResponseDummyjson} from "../models/ITodoResponseDummyjson";
import type { IPosts } from "../models/Posts";
import type { IPostResponseDummyjson } from "../models/PostsResponseDummyjson";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/TODOS?limit=0';
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts?limit=0';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments?limit=0';

const loadTodos = async (): Promise<ITodo[]> => {
    const response: ITodoResponseDummyjson = await fetch(endpointTodos)
        .then(value => value.json())

    return response.todos;

}
const loadPosts = async (): Promise<IPosts[]> => {
    const {posts}: IPostResponseDummyjson = await fetch(endpointPosts)
        .then(value => value.json())

    return posts;

}

const loadComments = async (): Promise<IComment[]> => {
    const {comments}: ICommentsResponseDummyjson = await fetch(endpointComments)
        .then(value => value.json())

    return comments;

}


export {loadTodos, loadPosts, loadComments};