import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    token: ""
}
const userStatusSlice = createSlice({
    initialState,
    name: "userStatus",
    reducers: {
        GET_USER_STATUS: (state) => {
            const token = localStorage.getItem('token');
            return {
                ...state,
                token
            }
        } ,
        SET_USER_STATUS : (state ,action)=>{
            localStorage.setItem('token' , action.payload) ;
            return {
                ...state ,
                token : action.payload
            }
        } ,
        LOGOUT : ()=>{
            localStorage.removeItem('token') ;
            return {
                token : null
            }
        }
    }
})
export default userStatusSlice.reducer ;
export const {GET_USER_STATUS , SET_USER_STATUS , LOGOUT} = userStatusSlice.actions ;