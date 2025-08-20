import {useEffect, useState} from 'react';
import type {ITodo} from "../../models/ITodo";
import {loadTodos} from "../../services/api.service";
import Todo from "../todo-component/Todo";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        async function fetchTodos() {
            const allTodos = await loadTodos();
            setTodos(allTodos);
        }

        fetchTodos();
    }, []);
    return (
        <div>
            {
                todos.map(todo => (<Todo todo={todo} key={todo.id} />))
            }
        </div>
    );
};

export default Todos;