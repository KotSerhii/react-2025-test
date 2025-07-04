import { useEffect, useState } from "react";

const TimerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => prev + 1); // збільшуємо лічильник щосекунди
        }, 1000);

        return () => {
            clearInterval(timer); // очищення таймера при виході з компонента
        };
    }, []); // запускається лише 1 раз

    return (
        <div>
            <h2>Час: {count} секунд</h2>
        </div>
    );
};

export default TimerComponent;