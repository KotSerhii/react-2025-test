import type {FC} from 'react';
import type {IPosts} from "../../models/Posts";

type PostsPropType = {
    post: IPosts;
}

const Post: FC<PostsPropType> = ({post: {title, body, tags}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <ul>
                {
                    tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Post;