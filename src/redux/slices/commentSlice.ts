import {createSlice} from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {comments: []},
    reducers: {},
    extraReducers:builder => builder
})
