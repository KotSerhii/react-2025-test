import type { FC } from "react";
import type { ICart } from "../../models/ICart";

 type cartPropsType= {
     item: ICart;
}

const CartComponent:FC<cartPropsType> = ({item}) => {
    return (
        <div>
            {item.products.map(product => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))}
        </div>
    );
};

export default CartComponent;