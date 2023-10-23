'use client';

import axios from 'axios';
import { isAppPageRouteDefinition } from 'next/dist/server/future/route-definitions/app-page-route-definition';
import React, { createContext, useContext, Dispatch, SetStateAction, useState} from 'react';



const Context = React.createContext<any>(null)


export const AppContextProvider = ({children, ...props}:any) => {
const context = useCreateAppContext(props)
  return <Context.Provider value={context} > {children}</Context.Provider> 

   


    // return(
    //     <GlobalContext.Provider value={{ isOpen, setOpen, items, setItems, cartItems, setCartItems, isAdded, setAdded, onAddToCart, rotate, setRotate}}>
    //         {children} </GlobalContext.Provider>
    // )
};

export const useAppContext = () =>{
  const context = React.useContext(Context);
  if(!context) throw new Error ('use App context within provider!');
  return context
}

export const useCreateAppContext = function (props:any) {
  const [isOpen, setOpen] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [rotate, setRotate] = useState(false); 
 
  
 

  const onAddToCart = (obj: any) => {

    axios.post('https://653158604d4c2e3f333cdfb5.mockapi.io/cart', obj);
    setCartItems([obj]);
  }

    return {
      isOpen, 
      setOpen, 
      isAdded, 
      setAdded,
      items,
      setItems,
      cartItems,
      rotate,
      setRotate,
      onAddToCart,
    };
    
  }