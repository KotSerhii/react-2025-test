import type {ITodo} from "../models/ITodo";
import type {ITodoResponseDummyjson} from "../models/ITodoResponseDummyjson";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/TODOS?limit=0';

const loadTodos = async (): Promise<ITodo[]> => {
    const response: ITodoResponseDummyjson = await fetch(endpointTodos)
        .then(value => value.json())

    return response.todos;

}

export {loadTodos};