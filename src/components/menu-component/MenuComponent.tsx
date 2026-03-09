import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/users'}>users</Link></li>
                <li><Link to={'/posts'}>posts</Link></li>
                <li><Link to={'/comments'}>comments</Link></li>
                <li><Link to={'/complex'}>complex</Link></li>
            </ul>
        </div>
    );
};