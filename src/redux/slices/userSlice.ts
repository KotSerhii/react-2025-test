import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {users: []},
    reducers: {},
    extraReducers:builder => builder
})