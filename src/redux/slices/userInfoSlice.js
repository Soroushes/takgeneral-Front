import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../data/urls";

const initialState = {
    full_name: '',
    phone_number: ''
}
export const fetchInfo = createAsyncThunk(
    'user/info',
    async (thunkAPI) => {
        const token = localStorage.getItem('token');
        if (!token) {
            return {
                full_name: '',
                phone_number: ''
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
            return data
        } catch (err) {
            console.log(err)
        }
    }
)
const userInfoSlice = createSlice({
    initialState,
    name: 'userInfo',
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