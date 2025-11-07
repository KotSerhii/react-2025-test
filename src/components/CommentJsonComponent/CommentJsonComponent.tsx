import type { FC } from "react";
import type { ICommentJson } from "../../models/Jsonplaceholder/ICommentJson";


type CommentPropsType={
    item: ICommentJson;
}

const CommentJsonComponent:FC<CommentPropsType> = ({item}) => {
    return (
        <div>
            <ul>
                <li>{"id"} - {item.id}</li>
                <li>{"name"} - {item.name}</li>
                <li>{"email"} - {item.email}</li>
                <li>{"body"} - {item.body}</li>
            </ul>

        </div>
    );
};

export default CommentJsonComponent;