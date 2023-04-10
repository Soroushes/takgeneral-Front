import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {} ;

export const fetchCart = createAsyncThunk(
    'user/cart',
    async (thunkAPI) => {
        const cartItems = localStorage.getItem('cart') ;
        if (!cartItems) return {} ;
        try {
            const {data} = await axios({
                url: 'https://takback.soroushes.tk/cart-detail/',
                method: 'POST',
                data : {cartsData : JSON.parse(cartItems)}
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
    reducers : {
        SET_CART_DATA : (state , action)=>{
            return action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export default userInfoSlice.reducer;
export const {SET_CART_DATA} = userInfoSlice.actions ;