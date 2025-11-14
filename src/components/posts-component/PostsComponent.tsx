import {useEffect, useState } from "react";
import type { IPost } from "../../models/IPost";
import { getAll } from "../../services/general.api.service";
import type { GeneralApiResponse } from "../../models/GeneralApiResponse";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
getAll<GeneralApiResponse & ${posts:IPost[]}>('/posts').then()
    }, []);
    return (
        <div>

        </div>
    );
};

export default PostsComponent;