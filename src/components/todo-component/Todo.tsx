import type {FC} from "react";
import type {ITodo} from "../../models/ITodo";

type TodoPropType = {
    todo: ITodo;
}

const Todo: FC<TodoPropType> = ({todo: {id, todo, completed}}) => {
    return (
        <div>
            <h4>{id}.{todo} - {completed ? "Done" : "Not done"}</h4>
        </div>
    );
};

export default Todo;