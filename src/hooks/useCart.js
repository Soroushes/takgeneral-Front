import {useEffect, useState} from "react";
import {useAxios} from "./useAxios";
import {useDispatch} from "react-redux";
import {SET_CART_DATA} from "../redux/slices/cart";

export const useCart = (id) => {
    const [countItem, setCountItem] = useState(0);
    const {callApi, loading} = useAxios();
    const dispatch = useDispatch();
    useEffect(() => {
        findCountOfItem();
    },[])
    const setCart = (add) => {
        let isNew = true;
        const cartUpdate = getLocalStorageCartData();
        let newCart = cartUpdate?.map((cartItem) => {
            if (cartItem.id === id) {
                isNew = false;
                return {...cartItem, count: add ? cartItem.count + 1 : cartItem.count - 1};
            } else return cartItem;
        });
        if (isNew && add) {
            newCart.push({count: 1, id});
        }
        newCart = newCart.filter((cartItem) => cartItem?.count > 0);
        sendCartRequest(newCart);
    };
    const sendCartRequest = (cartData) => {
        callApi({
            url: "cart-detail",
            method: "POST",
            data: {cartsData: cartData},
            successFunc: (result) => {
                dispatch(SET_CART_DATA(result));
                localStorage.setItem('cart', JSON.stringify(cartData));
                findCountOfItem();
            }
        })
    }
    const getLocalStorageCartData = () => JSON.parse(localStorage.getItem('cart')) || [];
    const findCountOfItem = () => {
        const cartUpdate = getLocalStorageCartData();
        const selectedCartItem = cartUpdate?.find((cartItem) => (cartItem.id === id));
        setCountItem(+selectedCartItem?.count || 0);
    };
    return {setCart, countItem, loading};
};
