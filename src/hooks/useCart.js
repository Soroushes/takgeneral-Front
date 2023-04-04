import {useEffect, useState} from "react";
import {useAxios} from "./useAxios";
import {useDispatch} from "react-redux";
import {SET_CART_DATA} from "../redux/slices/cart";

export const useCart = (id) => {
  const [countItem, setCountItem] = useState(0);
  const [localUpdate , setLocalUpdate] = useState([]) ;
  const {callApi , loading} = useAxios() ;
  const dispatch = useDispatch() ;
  const updateLocalCart=(newCart)=>{
    localStorage.setItem('cart' , JSON.stringify(newCart)) ;
    setLocalUpdate(newCart);
  }
  useEffect(() => {
    updateLocalCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(()=>{
    findCountOfItem();
  },[localUpdate])
  const setCart = (add) => {
    let isNew = true;
    let newCart = localUpdate.map((cartItem) => {
      if (cartItem.id === id) {
        isNew = false;
        return {...cartItem, count: add ? cartItem.count + 1 : cartItem.count - 1};
      } else return cartItem;
    });
    if (isNew && add) {
      newCart.push({ count: 1, id });
    }
    newCart = newCart.filter((cartItem)=>cartItem?.count > 0) ;
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
  const findCountOfItem = () => {
    const selectedCartItem = localUpdate?.find((cartItem) => (cartItem.id === id));
        setCountItem(+selectedCartItem?.count || 0);
  };
  return { setCart, countItem , loading };
};
