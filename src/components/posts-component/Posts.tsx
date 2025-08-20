import {useEffect, useState } from 'react';
import { loadPosts } from "../../services/api.service";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        loadPosts().then(posts => setPosts(posts));

    }, []);

    return (
        <div>

        </div>
    );
};

export default Posts;