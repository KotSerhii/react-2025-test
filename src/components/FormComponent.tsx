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
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user={
            username: formState.username,
            password: formState.password
        };
        console.log(user);
    };

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, username: input.value}); // відбувається контроль елементу Інпут (1 спосіб)
    // };
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, password: input.value}); // спочатку ...formState - приймає дефолтне значення, а потім за допомогою наступного елементу password: в useStste прописується з поля інпуту (те що вводимо)
    // };
    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
            const input = e.target as HTMLInputElement;
            console.log(input.name);
            setFormState({...formState, [input.name]: input.value}); // 2-спосіб використовуємо динамічний ключ [input.name] - тобто з яким полем ми будемо працювати таке і буде підствляти
        };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default FormComponent;