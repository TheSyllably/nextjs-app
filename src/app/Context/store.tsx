'use client';

import axios from 'axios';
import { createContext, useContext, Dispatch, SetStateAction, useState} from 'react'


const GlobalContext = createContext<ContextProps>({

 })


export const GlobalContextProvider = ({children}) => {
    const [isOpen, setOpen] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [rotate, setRotate] = useState(false); 
  const [inputValid, setInputValid] = useState(false);


  const onAddToCart = (obj: any) => {

    axios.post('https://653158604d4c2e3f333cdfb5.mockapi.io/cart', obj);
    setCartItems([obj]);
    
  }


    return(
        <GlobalContext.Provider value={{ isOpen, setOpen, items, setItems, cartItems, setCartItems, isAdded, setAdded, onAddToCart, rotate, setRotate, inputValid, setInputValid}}>
            {children} </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);