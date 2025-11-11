import {useEffect, useState } from "react";
import type { ICommentDummyjson } from "../../models/Dummyjson/ICommentDummyjson";
import { infoService } from "../../services/api.services";
import CommentDummyComponent from "../CommentDummyComponent/CommentDummyComponent";

const CommentsDummyComponent = () => {
    const [comments, setComments] = useState<ICommentDummyjson[]>([]);
    useEffect(() => {
        infoService.getAllCommentsDummyjson()
            .then(allComments=>(setComments(allComments)));
    }, []);

    return (
        <div>
            {comments.map((comment) => (<CommentDummyComponent item={comment} key={comment.id}/>))}
        </div>
    );
};

export default CommentsDummyComponent;