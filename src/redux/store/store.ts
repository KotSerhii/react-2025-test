//створюємо сховище store за допомогою ф-ції configureStore({});
//configureStore({}), має параметри: reducer: {} - в якому знах. частинки сховища slice,
import {userSlice} from "../slices/userSlice/userSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
// postSlice:null
    }
});
