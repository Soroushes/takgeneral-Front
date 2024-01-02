import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    title : "" ,
    severity : "success" ,
    hideDuration : 2000 ,
    show : false ,
}
const snakeBarSlice = createSlice({
    initialState,
    name: "SnakeBar",
    reducers: {
        SET_ALERT: (state, action) => {
            return {
                ...state ,
                ...action.payload
            }
        }
    }
})
export default snakeBarSlice.reducer ;
export const {SET_ALERT} = snakeBarSlice.actions ;