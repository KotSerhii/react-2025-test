import CommentComponent from "../comment-component/CommentComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";

const CommentsComponent = () => {

    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, [])

    return (
        <div>
            {comments.map((comment) => (<CommentComponent key={comment.id} item={comment}/>))}
        </div>
    );
};

export default CommentsComponent;