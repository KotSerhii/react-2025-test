import {useEffect, useState, type FC } from "react";
import type { IPost } from "../../models/IPost";
import { postService } from "../../services/api.service";

type PostsTypeProps =  {
    userId:string;
}

const PostsComponent:FC<PostsTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if(userId) {
            postService.getAllPostsOfUsersById(+userId)
                .then(value=> {
                    console.log(value);
                    setPosts(value);
                })
        }
    }, [userId]);
    return (
        <div>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    );
};

export default PostsComponent;