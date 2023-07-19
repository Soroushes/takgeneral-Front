import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../data/urls";
const initialState = {};

export const fetchCart = createAsyncThunk(
    'user/cart',
    async (cartData) => {
        const accessToken = localStorage.getItem('token')
        let cartItems = cartData;
        console.log(localStorage.getItem('cart'))
        if (!cartData) {
            cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        }
        try {
            const {data} = await axios({
                url: `${BASE_URL}cart-detail/`,
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
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export default userInfoSlice.reducer;