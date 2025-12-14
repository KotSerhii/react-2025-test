export const retrieveLocalStorage = <T, > (key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
}
// це допоміжна функція для отримання данних з ЛОКАЛ СТОРЕДЖ, щоб вирішити проблему з типізацією, в данному випадку
// використовуємо Т-джерерік, отриманні данні хардкодимо під дженерік (as T)