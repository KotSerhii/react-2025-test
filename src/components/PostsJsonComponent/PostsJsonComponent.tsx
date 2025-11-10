import {useEffect, useState} from "react";
import type {IPostJson} from "../../models/Jsonplaceholder/IPostJson";
import {infoService} from "../../services/api.services";
import PostJsonComponent from "../PostJsonComponent/PostJsonComponent";


const PostsJsonComponent = () => {
    const [posts, setPosts] = useState<IPostJson[]>([]);
    useEffect(() => {
        infoService.getAllPostsJson()
            .then((allPosts) => {
                setPosts(allPosts)
            })
    }, []);
    return (
        <div>
            {posts.map((post) => (<PostJsonComponent key={post.id} item={post}/>))}
        </div>
    );
};

export default PostsJsonComponent;