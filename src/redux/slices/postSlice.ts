import {createSlice} from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: {posts: []},
    reducers: {},
    extraReducers:builder => builder
})