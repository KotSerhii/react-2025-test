import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.services.ts";

type UserSliceType =  {
    users: IUser[];
}

const initUserSliceState: UserSliceType = {users: []};

const loadUsers=createAsyncThunk('userSlice/loadUsers', async (_,thunkAPI)=>{
    try{
        const users = await getAll<IUser[]>('/users');
        return thunkAPI.fulfillWithValue(users)
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('some error happened')
    }
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers:builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users=action.payload
        })
        .addCase(loadUsers.rejected, (state,action)=>{
            console.log(state,action)
        })
})

export const userSliceActions = {...userSlice.actions, loadUsers}