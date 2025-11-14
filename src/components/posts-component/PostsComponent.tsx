import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost";
import {getAll} from "../../services/general.api.service";
import type {GeneralApiResponse} from "../../models/GeneralApiResponse";
import PostComponent from "./PostComponent";


const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<GeneralApiResponse & { posts: IPost[] }>('/posts')
            .then(({posts}) => setPosts(posts));
    }, []);
    return (
        <div>
            {posts.map((post) => (<PostComponent post={post} key={post.id}/>))}
        </div>
    );
};

export default PostsComponent;