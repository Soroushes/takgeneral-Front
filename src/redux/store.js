import {configureStore} from "@reduxjs/toolkit";
import snakeBarSlice from "./slices/snakeBarSlice";
export const store = configureStore({
    reducer : {
        alert : snakeBarSlice
    }
})