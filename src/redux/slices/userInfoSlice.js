import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "@/data/urls";

const initialState = {
    full_name: '',
    phone_number: '',
    isLoggedIn : false ,
    token : null
}
export const fetchInfo = createAsyncThunk(
    'user/info',
    async (thunkAPI) => {
        const token = localStorage.getItem('token');
        if (!token) {
            return {
                full_name: '',
                phone_number: '',
                isLoggedIn : false ,
                token : null
            }
        }
        try {
            const {data} = await axios({
                url: `${BASE_URL}user-status/`,
                method: 'GET',
                headers: {
                    Authorization: token ? 'Bearer ' + token : null
                }
            })
            return {...data , isLoggedIn : true , token}
        } catch (err) {
            if (err?.response?.status===401){
            localStorage.removeItem('token') ;
            return {
                full_name: '',
                phone_number: '',
                isLoggedIn : false ,
                token : null
            }
        }
    }}
)
const userInfoSlice = createSlice({
    initialState,
    name: 'userInfo',
    reducers : {
        LOGOUT : ()=>{
            localStorage.removeItem('token') ;
            return {
                full_name: '',
                phone_number: '',
                isLoggedIn : false ,
                token : null
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInfo.fulfilled, (state, action) => {
            if (action.payload) {
                return {
                    ...action.payload
                }
            }
        })
    }
})
export default userInfoSlice.reducer;
export const {LOGOUT} = userInfoSlice.actions ;