import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {postSliceActions} from "../../redux/slices/postSlice.ts";
import {commentSliceActions} from "../../redux/slices/commentSlice.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import PostComponent from "../post-component/PostComponent.tsx";
import CommentComponent from "../comment-component/CommentComponent.tsx";


const ComplexComponent = () => {
    const dispatch= useAppDispatch();
    const {users,posts,comments} = useAppSelector(state => (
        {   users:state.userSlice.users,
            posts:state.postSlice.posts,
            comments:state.commentSlice.comments}
    ));
    useEffect(() => {
        if(!users.length){
            dispatch(userSliceActions.loadUsers())
        }
        if(!posts.length){
            dispatch(postSliceActions.loadPosts())
        }
        if(!comments.length){
            dispatch(commentSliceActions.loadComments())
        }
    },[])
    return (
        <div>
            <h2>Users</h2>
            {users.map(user=><UserComponent item={user} key={user.id}/>)}
            <h2>Posts</h2>
            {posts.map(post=><PostComponent item={post} key={post.id}/>)}
            <h2>Comments</h2>
            {comments.map(comment=><CommentComponent item={comment} key={comment.id}/>)}
        </div>
    );
};

export default ComplexComponent;