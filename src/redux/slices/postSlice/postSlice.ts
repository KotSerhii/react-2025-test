import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../../models/IPost.ts";

type PostSliceType = {
    posts: IPost[]
}

const initialState: PostSliceType = {posts:[]};

const loadPosts=createAsyncThunk('postSlice/loadPosts',
    async (_,thunkAPI)=>{
    try {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
           return thunkAPI.fulfillWithValue(posts)

    } catch (e) {
        console.error(e);
        return thunkAPI.rejectWithValue("some error occurred")
    }
    })

export const postSlice = createSlice({
    name:"postSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadPosts.fulfilled, (state,action:PayloadAction<IPost[]>)=>{
            state.posts=action.payload
        })
        .addCase(loadPosts.rejected,(state,action)=>{
            console.log(state)
            console.log(action)
        })

});

export const postsSliceActions = {...postSlice.actions, loadPosts};