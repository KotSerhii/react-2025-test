
import type {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";

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
    user: IUser|null;
    loadState: boolean;
}

const initialState: UserSliceType = {users: [], user:null, loadState: false};

const loadUsers=createAsyncThunk(
    "userSlice/loadUsers",
     async (_,thunkAPI)=>{
         try {
             const users = await fetch('https://jsonplaceholder.typicode.com/users')
                 .then(response => response.json())
             // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
             return thunkAPI.fulfillWithValue(users);
             // throw new Error(); - якщо закоментувати return, то примусово викенемо в помилку та перейдемо в catch (e)
         } catch (e) {
             console.error(e);
             return thunkAPI.rejectWithValue('some error occurred');
         }
    }
    )
const loadUser=createAsyncThunk(
    "userSlice/loadUser",
    async (id:string,thunkAPI)=>{
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                .then(response => response.json())
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true)); щоб не було дублювання робимо
            // в .addCase робимо .addMatcher
            return thunkAPI.fulfillWithValue(user);
            // throw new Error(); - якщо закоментувати return, то примусово викенемо в помилку та перейдемо в catch (e)
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('some error occurred');
        }
    }
)
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        changeLoadState:(state, action:PayloadAction<boolean>)=>{
            state.loadState=action.payload;
}
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled,(state,action:PayloadAction<IUser[]>)=>{
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state,action)=>{
                console.log(state);
                console.log(action)
            })
            .addCase(loadUser.fulfilled, (state,action:PayloadAction<IUser>)=>{
                state.user=action.payload
            })
            .addMatcher(isFulfilled(loadUser,loadUsers), (state)=>{
                state.loadState=true;
            })
            .addMatcher(isRejected(loadUsers,loadUser), (state)=>{
                console.log(state);
            })
})
export const userSliceActions = {...userSlice.actions, loadUsers, loadUser};