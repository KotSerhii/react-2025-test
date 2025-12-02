
import { useForm } from "react-hook-form";
interface IFormProps {
    username: string;
    password: string;
    age: number;
}
const FormComponent = () => {


    const {handleSubmit,register,formState:{errors,isValid}} = useForm<IFormProps>({
        mode: 'all',
    }); // для перевірки валідності використовуємо formState, mode - це ф-ція для задачі параметрів "коли виводити повідомлення при валідації"


``
    const customHandler = (formDataProps:IFormProps)=>{
        console.log(formDataProps);
    };
    return (

        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username', {
                    required: {value:true, message: 'Username is required'},
                    //     pattern:{
                    //        value:/^[a-zA-Z0-9_-]+$/,
                    //         message:'wrong name'
                    // }
                    minLength: {value: 4, message: "wrong-username"}
                })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input type="text" {...register('password', {
                    required: true,
                    minLength: {value: 3, message: "password is short"},
                    maxLength: {value: 6, message: "password is long"},
                })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1, message: "age too small"},
                    max: {value: 117, message: "age too big"},
                })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;