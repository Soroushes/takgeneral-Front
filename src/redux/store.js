import {configureStore} from "@reduxjs/toolkit";
import userStatusSlice from "./slices/userStatusSlice";

export const store = configureStore({
    reducer : {
       userStatus : userStatusSlice
    }
})