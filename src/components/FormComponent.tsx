import { useState, type FormEvent } from "react";

const FormComponent = () => {
    interface IFormProps {
        username: string;
        password: string;
    }

    const [formState, setFormState] = useState<IFormProps>({
        username: '',
        password: ''
    })
    const hanleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement; // за допомогою явної типізації можна доступатися до данних в формі
        console.log(form.username.value);
        console.log(form.password.value)
    };
    return (
        <div>
            <form onSubmit={hanleSubmit}>
                <input type="text" name={'username'} />
                <input type="text" name={'password'} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default FormComponent;