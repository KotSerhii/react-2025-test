import {useEffect, useState } from "react";
import type { ICar } from "../../models/ICar";
import { getCars } from "../../services/api.service";
import CarComponent from "../car-component/CarComponent";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then(cars => setCars(cars));
    }, []);
    return (
        <div>
            {cars.map((car) => (<CarComponent key={car.id} item={car}/>))}
        </div>
    );
};

export default CarsComponent;