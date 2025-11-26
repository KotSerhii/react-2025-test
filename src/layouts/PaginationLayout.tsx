import {Outlet} from "react-router-dom";
import PaginationComponent from "../components/pagination-component/PaginationComponent";

const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};

export default PaginationLayout;