import {useState, type FormEvent} from "react";

const FormComponent = () => {
    interface IFormProps {
        username: string;
        password: string;
    }

    const [formState, setFormState] = useState<IFormProps>({
        username: 'foobar',
        password: '1111'
    })
    const hanleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };

    const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, username: input.value}); // відбувається контроль елементу Інпут
    };
    const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, password: input.value}); // спочатку ...formState - приймає дефолтне значення, а потім за допомогою наступного елементу password: в useStste прописується з поля інпуту (те що вводимо)
    };

    return (
        <div>
            <form onSubmit={hanleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleUsernameChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handlePasswordChange}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default FormComponent;