import React, { useState } from "react";

export const CartContext = React.createContext(); 

export const CartProvider = ({ children }) =>{
    const [productCarList, setproductCarList] = useState([])

    
    const addItem = (item, quantity) => {
        console.log('item', item , 'quantity', quantity)
    }

    return (
        <CartContext.Provider value = {{productCarList, addItem}}>
            {children}
        </CartContext.Provider>


    )
}


export default CartProvider;