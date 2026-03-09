import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComment.ts";
import {getAll} from "../../services/api.services.ts";


type CommentSliceType= {
    comments:IComment[]
}

const initCommentSliceState:CommentSliceType = {comments: []};

const loadComments=createAsyncThunk('commentSlice/loadComments', async (_,thunkAPI)=>{
    try {
        const comments = await getAll<IComment[]>('/comments')
        return thunkAPI.fulfillWithValue(comments)
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('some error occurred')
    }
})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers:builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
            state.comments=action.payload
        })
        .addCase(loadComments.rejected, (state,action)=>{
            console.log(state,action)
        })
});

export const commentSliceActions = {...commentSlice.actions, loadComments};