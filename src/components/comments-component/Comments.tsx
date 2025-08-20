import  {useEffect, useState } from 'react';
import type { IComment } from "../../models/Comments";
import { loadComments } from "../../services/api.service";
import {Comment} from '../comment-component/Comment'

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        loadComments().then(value => setComments(value));
    }, []);

    return (
        <div>
            {
                comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
            }
        </div>
    );
};

export default Comments;