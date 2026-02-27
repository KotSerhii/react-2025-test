//створюємо сховище store за допомогою ф-ції configureStore({});
//configureStore({}), має параметри: reducer: {} - в якому знах. частинки сховища slice,
import {userSlice} from "../slices/userSlice/userSlice.ts";
import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "../slices/postSlice/postSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
    }
});
