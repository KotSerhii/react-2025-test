
import { useForm } from "react-hook-form";
interface IFormProps {
    username: string;
    password: string;
    age: number;
}
const FormComponent = () => {


    const {handleSubmit,register} = useForm<IFormProps>();//деструктуруємо та витягаємо методи з хука, метод handleSubmit повинен приймати колбек ф-цію, метод register автоматично створює об'єкти з назвою полів інпуту


``
    const customHandler = (formDataProps:IFormProps)=>{
        console.log(formDataProps);
    };
    return (

        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age')}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default FormComponent;