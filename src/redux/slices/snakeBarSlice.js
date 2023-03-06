import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    title : "" ,
    severity : "" ,
    hideDuration : "3000" ,
    show : false ,
}
const snakeBarSlice = createSlice({
    initialState,
    name: "SnakeBar",
    reducers: {
        SET_ALERT: () => {

        }
    }
})
export default snakeBarSlice.reducer ;
export const {SET_ALERT} = snakeBarSlice.actions ;