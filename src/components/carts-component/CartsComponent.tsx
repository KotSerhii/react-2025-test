import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICart } from "../../models/ICart";
import { cartsService } from "../../services/api.service";
import CartComponent from "../cart-component/CartComponent";

const CartsComponent = () => {
    const {id}=useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if(id)( cartsService.getAllCarts(id)
             .then(({carts})=>setCarts(carts))
        )
    }, [id]);
    return (
        <div>
            {carts.map(cart=>(<CartComponent item={cart} key={cart.id}/>))}
        </div>
    );
};

export default CartsComponent;