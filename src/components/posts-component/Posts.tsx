import {useEffect, useState } from 'react';
import { loadPosts } from "../../services/api.service";
import type { IPosts } from "../../models/Posts";
import Post from "../post-component/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        loadPosts().then(value => setPosts(value));

    }, []);

    return (
        <div>
            {
                posts.map (post => (<Post key={post.id} post={post} />))
            }
        </div>
    );
};

export default Posts;