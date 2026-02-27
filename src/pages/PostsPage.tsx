import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {postsSliceActions} from "../redux/slices/postSlice/postSlice.ts";

export const PostsPage = () => {

    const {posts} = useAppSelector(({postSlice}) => postSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {dispatch(postsSliceActions.loadPosts())},[])

    return (
        <>
            {
                posts.map(post=>{return <div key={post.id}>user id - {post.userId}, post:  {post.body}</div>})
            }
        </>
    );
};