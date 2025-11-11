import {useEffect, useState } from "react";
import type { IPostDummyjson } from "../../models/Dummyjson/IPostDummyjson";
import { infoService } from "../../services/api.services";
import PostDummyComponent from "../PostDummyComponent/PostDummyComponent";


const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostDummyjson[]>([]);
    useEffect(() => {
        infoService.getAllPostsDummyjson()
            .then(allPosts=>(setPosts(allPosts)));
    }, []);
    return (
        <div>
            {posts.map((post) => (<PostDummyComponent item={post} key={post.id} />))}
        </div>
    );
};

export default PostsDummyComponent;