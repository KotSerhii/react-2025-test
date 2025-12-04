import { Link } from "react-router-dom";
import  "./MenuComponent.css";

const MenuComponent = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to={"/cars"}>cars</Link></li>
                <li><Link to={"/cars/add car"}>add car</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;