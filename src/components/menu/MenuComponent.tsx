import { Link } from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users'}>users</Link></li>

            </ul>
        </div>
    );
};

export default MenuComponent;