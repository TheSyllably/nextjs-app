'use client';

import axios from 'axios';
import { isAppPageRouteDefinition } from 'next/dist/server/future/route-definitions/app-page-route-definition';
import React, { createContext, useContext, Dispatch, SetStateAction, useState, ContextType} from 'react';



const Context = React.createContext<any>(undefined)


export const AppContextProvider = ({children, ...props}:React.ReactNode | any) => {
const context = useCreateAppContext(props)
  return <Context.Provider value={context} > {children}</Context.Provider> 

};

export const useAppContext = () =>{
  const context = React.useContext(Context);
  if(!context) throw new Error ('use App context within provider!');
  return context
}

export const useCreateAppContext = function (props: boolean | string[]) {
  const [isOpen, setOpen] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [rotate, setRotate] = useState(false); 
 
  
 

  const onAddToCart = (obj: string) => {

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