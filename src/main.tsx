import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "./models/IUser.ts";


// userSlice - це шматок, який треба налаштовувати окремо, створюємо за допомогою ф-ції createSlice({})
// в createSlice({}) треба визначити 3 характеристики:
// 1 - name: "userSlice" - називаємо, як і сам slice, використання тільки для пошуку;
// 2 - initialState:{} - початковий стан (users:[]), обов'язковово треба типізувати (type UserSliceType),
// виносимо в окремий масив та типізуємо (const initialState:UserSliceType = {users:[]}), після цих дій
// наш userSlice автоматично типізується
// 3 - reducers:{} - методи, які впливають на початковий стан, ф-ції в reducers:{} повинні приймати 2 аргументи:
// 1) state - це наш початковий стан initialState:{} та всі його зміни,  2) action - аргумент, він тримає в собі
// стрінгову назву та корисне навантаження(payload), яке ми передаємо як аргумент в середину ф-ції (loadUsers)
// action:PayloadAction<IUser[]> - типізація action для нашого масиву
// state.users = action.payload - в початковий стан записуємо users, яких ми загрузимо, це основна дія нашої ф.loadUsers.
// Після цих дій наше сховище вважається готовим.
type UserSliceType = {
    users: IUser[];
}

const initialState: UserSliceType = {users: []};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }
    }
})
export const userSliceActions = {...userSlice.actions};

//створюємо сховище store за допомогою ф-ції configureStore({});
//configureStore({}), має параметри: reducer: {} - в якому знах. частинки сховища slice,
const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
// postSlice:null
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
// Provider - сховище через яке всі компоненти взаємодіють, визначаємо на якому рівні це буде відбуватися, в данному
// випадку ми працюємо на вищому рівні та огортаємо <RouterProvider router={router}/>
// store={} - пропса за замовчуванням пуста, це посилання на сховище