import {configureStore} from "@reduxjs/toolkit";
import snakeBarSlice from "./slices/snakeBarSlice";
import userInfoSlice  from "./slices/userInfoSlice";
import cart from "./slices/cart";
import deviceInfo from "@/redux/slices/deviceInfo";
export const store = configureStore({
    reducer : {
        alert : snakeBarSlice ,
        userInfo : userInfoSlice,
        cart : cart ,
        deviceInfo : deviceInfo
    }
})