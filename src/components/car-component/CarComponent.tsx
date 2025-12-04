import type { FC } from "react";
import type { ICar } from "../../models/ICar";
import './car-component.css';

type CarPropType = {
    item:ICar;
}

const CarComponent:FC<CarPropType> = ({item}) => {
    return (
        <div className="car-component">

            <div><span>Brand:</span> {item.brand} - <span>price:</span> {item.price}</div>

        </div>
    );
};

export default CarComponent;