import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";


type CommentPropsType = {
    item: IComment;
}

const CommentComponent:FC<CommentPropsType> = ({item}) => {
    return (
        <div>
            id:{item.id} - name: {item.name}
            <p>{item.body}</p>
        </div>
    );
};

export default CommentComponent;