import type { FC } from "react";
import type { IPostJson } from "../../models/Jsonplaceholder/IPostJson";

 type PostComponentProps = {
     item:IPostJson;
 }
const PostJsonComponent:FC<PostComponentProps> = ({item}) => {
    return (
        <div>

            <ul>
                <li>userId - {item.userId}</li>
                <li>title - {item.title}</li>
                <li>body - {item.body}</li>
            </ul>

        </div>
    );
};

export default PostJsonComponent;