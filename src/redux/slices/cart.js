import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchCart = createAsyncThunk(
    'user/cart',
    async (cartData) => {
        const accessToken = localStorage.getItem('token')
        let cartItems = cartData;
        if (!cartData) {
            cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        }
        // if (!cartItems) return {products: []};
        try {
            const {data} = await axios({
                url: 'https://takback.soroushes.tk/cart-detail/',
                method: 'POST',
                data: {cartsData: cartItems},
                headers: {
                    Authorization: accessToken ? 'Bearer ' + accessToken : null
                }
            })
            localStorage.setItem('cart', JSON.stringify(data.products.map((cart) => ({
                count: cart.quantity,
                id: cart.product_id
            }))))
            return data
        } catch (err) {
            console.log(err)
        }
    }
)
const userInfoSlice = createSlice({
    initialState,
    name: 'userInfo',
    reducers: {
        SET_CART_DATA: (state, action) => {
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
export const {SET_CART_DATA} = userInfoSlice.actions;