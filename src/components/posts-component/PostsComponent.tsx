import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice.ts";


const PostsComponent = () => {

    const {posts} = useAppSelector(({postSlice}) => postSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <div>
            {posts.map(post => (<PostComponent key={post.id} item={post}/>))}
        </div>
    );
};

export default PostsComponent;