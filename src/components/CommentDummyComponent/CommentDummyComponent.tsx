import type { FC } from "react";
import type { ICommentDummyjson } from "../../models/Dummyjson/ICommentDummyjson";


type CommentPropsType= {
    item:ICommentDummyjson;
}

const CommentDummyComponent:FC<CommentPropsType> = ({item}) => {
    return (
        <div>
            <p>id: {item.id}</p>
            <p>body: {item.body}</p>
            <p>postId: {item.postId}</p>
            <p>likes: {item.likes}</p>
            <p>user: </p>
            <ul>
                <li>id: {item.user.id}</li>
                <li>username: {item.user.username}</li>
                <li>fullName: {item.user.fullName}</li>
            </ul>
            <hr></hr>
        </div>
    );
};

export default CommentDummyComponent;