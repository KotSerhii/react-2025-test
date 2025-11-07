import {useEffect, useState } from "react";
import { infoService } from "../../services/api.services";
import type { ICommentJson } from "../../models/Jsonplaceholder/ICommentJson";
import CommentJsonComponent from "../CommentJsonComponent/CommentJsonComponent";


const CommentsJsonComponent = () => {

    const [comments, setComments] = useState<ICommentJson[]>([]);
    useEffect(() => {
        infoService.getAllCommentsJson()
            .then((allComments)=>{
                setComments(allComments);
            })
    }, []);
    return (
        <div>
            {comments.map((comment: ICommentJson) => (<CommentJsonComponent item={comment} key={comment.id}/>))}
        </div>
    );
};

export default CommentsJsonComponent;