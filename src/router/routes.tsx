import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CarsPage from "../pages/CarsPage";
import CreateNewCarPage from "../pages/CreateNewCarPage";

const routes=createBrowserRouter ([
    {path:'/', element:<App/>, children:[
            {path:'cars', element: <CarsPage/>},
            {path: 'cars/add car', element: <CreateNewCarPage/>}
        ]},
]);
export default routes;