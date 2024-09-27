import React,{ createContext, useEffect, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext=createContext(null);

const getDefaultCart =()=>{
    let cart ={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index] =0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartITems]=useState(getDefaultCart());
    const [totalAmount,setTotalAmount]=useState(0);
    const [totalCartItems,setTotalCartItems]=useState(0);



    const addToCart = (itemId)=>{
        setCartITems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        setTotalCartItems(totalCartItems+1);
        // console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartITems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setTotalCartItems(totalCartItems-1);
    }

    const getTotalCartAmount = ()=>{
        let totals=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totals+=itemInfo.new_price*cartItems[item]; 
            }
        }
        setTotalAmount(totals);
    }

    // console.log(getTotalCartAmount());

    useEffect(() => {
        getTotalCartAmount();
    },[cartItems])

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,totalAmount,totalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;