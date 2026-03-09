import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api.services.ts";


type PostSliceType= {
    posts: IPost[]
}
const initPostSliceState: PostSliceType = {posts: []};

const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_,thunkAPI)=>{
    try {
        const posts = await getAll<IPost[]>('/posts');
        return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
        console.error(e);
        return thunkAPI.rejectWithValue('some error occurred');
    }
})

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers:builder => builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=>{
            state.posts=action.payload
        })
        .addCase(loadPosts.rejected, (state,action) =>{
            console.log(state)
            console.log(action)
        })
})

export const postSliceActions = {...postSlice.actions, loadPosts}