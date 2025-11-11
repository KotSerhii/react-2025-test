import type { FC } from "react";
import type { IPostDummyjson } from "../../models/Dummyjson/IPostDummyjson";



type PostPropsType= {
    item: IPostDummyjson;
}

const PostDummyComponent:FC<PostPropsType> = ({item}) => {
    return (
        <div>
            <p>id: {item.id} </p>
            <p>title: {item.title} </p>
            <p>body: {item.body} </p>
            <p>tags: {item.tags.join(", ")} </p>
            <p>reactions: </p>

            <ul>
                <li>likes: {item.reactions.likes} </li>
                <li>dislikes: {item.reactions.dislikes} </li>
            </ul>

            <p>views: {item.views} </p>
            <p>userId: {item.userId} </p>
        </div>
    );
};

export default PostDummyComponent;