import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar";
import carValidator from "../validators/car.validator";
import { addNewCar } from "../../services/api.service";


const CreateNewCar = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })
    const createHandler = (data: ICar) => {
        addNewCar(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" {...register("brand")}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number"{...register("price")}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register("year")}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
}
export default CreateNewCar;