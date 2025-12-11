import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <ul>
                <li><Link to={''}>Home page</Link></li>
                <li><Link to={'/login'}>Logination</Link></li>
                <li><Link to={'/auth/resources'}>Resources</Link></li>
            </ul>
        </>
    );
};