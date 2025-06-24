import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";


export const CartContext = createContext();

//SessionStorage to store within browser
const Storage  = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
const initialState = { cartItems: Storage }


const CartContextProvider = ({children}) => {
    //debugger;
    const [state, dispatch] = useReducer(CartReducer, initialState);
  
    const addProduct = payload => {
        dispatch({ type: 'ADD', payload });
        return state.cartItems;
    }
    
    const removeProduct = payload => {
        dispatch({ type: 'REMOVE', payload });
        return state.cartItems;
    }

    const increaseQty = payload => {
        dispatch({ type: 'INCREASEQTY', payload });
        return state.cartItems;
    }

    const decreaseQty = payload => {
        dispatch({ type: 'DECREASEQTY', payload });
        return state.cartItems;
    }
    
    const clearBasket = () => {
        dispatch({ type: 'CLEAR', payload : undefined });
        return state.cartItems;
    }

    const getCartItems =() => {
        return state.cartItems;
    }

    const contextValues = {      //expose these methods to Provider
        addProduct, removeProduct, increaseQty, decreaseQty, clearBasket, getCartItems,
        ...state
    }

    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};


export default CartContextProvider;