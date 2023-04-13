import {useEffect, useState} from "react";
import {useAxios} from "./useAxios";
import {useDispatch} from "react-redux";
import {SET_CART_DATA} from "../redux/slices/cart";

export const useCart = (id) => {
  const [countItem, setCountItem] = useState(0);
  const {callApi , loading} = useAxios() ;
  const dispatch = useDispatch() ;
  const updateLocalCart=(newCart)=>{
    localStorage.setItem('cart' , JSON.stringify(newCart)) ;
    getNewCartUpdate();
  }
  useEffect(() => {
    updateLocalCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);
  const setCart = (add) => {
    let isNew = true;
    const cartUpdate = getNewCartUpdate();
    console.log(cartUpdate)
    let newCart = cartUpdate?.map((cartItem) => {
      if (cartItem.id === id) {
        isNew = false;
        console.log(add)
        setCountItem(+(add ? cartItem.count + 1 : cartItem.count - 1))
        return {...cartItem, count: add ? cartItem.count + 1 : cartItem.count - 1};
      } else return cartItem;
      
    });
    if (isNew && add) {
      newCart.push({ count: 1, id });
      setCountItem(1);
    }
    newCart = newCart.filter((cartItem)=>cartItem?.count > 0) ;
    updateLocalCart(newCart)
    sendCartRequest(newCart) ;
  };
  const sendCartRequest = (cartData)=>{
    callApi({
      url : "cart-detail" ,
      method : "POST" ,
      data : {cartsData : cartData},
      successFunc : (result)=>{
        dispatch(SET_CART_DATA(result));
        updateLocalCart(cartData);
      }
    })
  }
  const getNewCartUpdate = ()=>{
    const cartUpdate = JSON.parse(localStorage.getItem('cart')) || [];
    return cartUpdate;
  };
  // const findCountOfItem = () => {
  //   const cartUpdate = getNewCartUpdate();
  //   const selectedCartItem = cartUpdate?.find((cartItem) => (cartItem.id === id));
  //       setCountItem(+selectedCartItem?.count || 0);
  // };
  
  return { setCart, countItem , loading };
};
