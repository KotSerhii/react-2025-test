import  { type FC } from 'react';
import type { IComment } from "../../models/Comments";

type CommentPropsType = {
    comment: IComment;
}


const Comment:FC<CommentPropsType> = ({comment:{user:{fullName,username},body}}) => {
    return (
        <div>
            <h3>{fullName} - username:{username}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;