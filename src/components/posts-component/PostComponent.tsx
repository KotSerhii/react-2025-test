import type { IPost } from "../../models/IPost";

interface IPostComponentProps {
    post: IPost;
}

const PostComponent = ({post}: IPostComponentProps) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;