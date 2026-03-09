import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";


type PostPropsType = {
    item:IPost;
}

const PostComponent:FC<PostPropsType> = ({item}) => {

    return (
        <div>
            userId: {item.userId} - title:{item.title}
            <p>{item.body}</p>
        </div>
    );
};

export default PostComponent;