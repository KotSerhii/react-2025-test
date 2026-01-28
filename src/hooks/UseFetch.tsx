import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue:T) => {
    const [obj, setObj] = useState<T>(defaultValue)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(users => setObj(users))
    }, []);
    return obj;
}

// 1. типизація нашого кастомного хука <T, >, обов'язково ставимо кому (тільки TS вимагає такого синтаксису)
// 2. Для дефолтного значення, вводимо додатковий аргумент (defaultValue:T) типизуємо його дженеріком,
// робиться для того щоб можна було зазначити дефолтний useState<T>(defaultValue) та
// в подальшому не робити перевірок при використанні отриманних даних (в нашому випадку масиву юзерів)