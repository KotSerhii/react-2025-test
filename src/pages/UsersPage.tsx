import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const UsersPage = () => {

//   useSelector(state => {}) - хук, який підхоплює данні, state - посилання на наше сховище store, з цього
//   state деструктуруємо необхідну інформацію, ці данні треба типізувати, але є проблема, що state після
//   додавання нових Slice буде змінюватись і треба вручну змінювати типізацію, для цього вирішення використовуємо
//   власний хук, який робить автоматичну типізацію, який виглядає як:
//    const useAppSelector= useSelector.withTypes<ReturnType<typeof store.getState>>();
// варіанти деструктуризації:
    // const {userSlice}=useAppSelector(state => state)
    // const stateType=useAppSelector(state => state.userSlice)


    const {users}=useAppSelector(({userSlice}) => userSlice)

    // зараз userSlice - це наш const initialState: UserSliceType = {users: []}, який ми підхопили в іншій компоненті,
    // яку далі ми можемо використовувати
    //useDispatch()-це ф-ція, викликає інші ф-ції, тобто в аргумент dispatch, щоб заповнити масив users[], нам необхідно
    // передати ф-цію з reducers:{} - userSlice.actions.loadUsers(users), щоб працювати зручно ми будемо одразу експортувати
    // ф-цію "...userSlice.actions" та оголошувати необхідну ф-цію

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // dispatch(userSlice.actions.loadUsers(users))
                dispatch(userSliceActions.loadUsers(users))
            })
    }, []);

    return (
        <div>
            {
                users.map(user=>{
                    return <div key={user.id}>{user.id} - {user.name}</div>
                })
            }
        </div>
    );
};