import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart} from "@/redux/slices/cart";

export const useCart = (id) => {
    const [countItem, setCountItem] = useState(0);
    const [priceItem , setPriceItem] = useState({finalPrice : 0 , price:0});
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.cart.products)
    useEffect(() => {
        findCountOfItem();
    }, [allProducts])
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
        // newCart = newCart.filter((cartItem) => cartItem?.count > 0);
        dispatch(fetchCart(newCart))
    };
    const deleteProduct = () => {
        const cartUpdate = getLocalStorageCartData();
        let newCart = cartUpdate?.map((cartItem) => {
            if (cartItem.id === id) {
                return {...cartItem, count: 0}
            } else return cartItem
        })
        dispatch(fetchCart(newCart));
    }
    const getLocalStorageCartData = () =>localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const findCountOfItem = () => {
        const selectedCartItem = allProducts?.find((cartItem) => (cartItem.product_variant_id === id));
        setCountItem(+selectedCartItem?.quantity || 0);
        setPriceItem({price: selectedCartItem?.sum_price , finalPrice: selectedCartItem?.sum_final_price});
    };
    return {setCart, countItem, deleteProduct , priceItem};
};
