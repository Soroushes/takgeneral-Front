import { useEffect, useState } from "react";

export const useCart = (id) => {
  const [countItem, setCountItem] = useState(0);
  const [localUpdate , setLocalUpdate] = useState([])
  const updateLocalCart=(newCart)=>{
    const cart = newCart || [];
    const filteredCart = cart.filter((cartItem)=>cartItem?.count > 0);
    localStorage.setItem('cart' , JSON.stringify(filteredCart)) ; 
    setLocalUpdate(filteredCart)
  }
  useEffect(() => {
    updateLocalCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  useEffect(()=>{
    findCountOfItem();
  },[localUpdate])
  const setCart = (add ) => {
    let isNew = true;
    const newCart = localUpdate.map((cartItem) => {
      if (cartItem.id === id) {
        isNew = false;
        const newCartItem = { ...cartItem, count: add? cartItem.count + 1 : cartItem.count - 1 };
        return newCartItem;
      } else return cartItem;
    });
    if (isNew && add) {
      newCart.push({ count: 1, id });
    }
    updateLocalCart(newCart);
  };
  
  const findCountOfItem = () => {
    const selectedCartItem = localUpdate.find((cartItem) => (cartItem.id = id));
        setCountItem(selectedCartItem?.count || 0);
  };
  return { setCart, countItem };
};
