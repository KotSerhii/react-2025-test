import type {ITodo} from "../models/ITodo";
import type {ITodoResponseDummyjson} from "../models/ITodoResponseDummyjson";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';

const loadTodos = async (): Promise<ITodo[]> => {
    const {todos}: ITodoResponseDummyjson = await fetch(endpointTodos)
        .then(value => value.json())

    return todos;

}

export {loadTodos};