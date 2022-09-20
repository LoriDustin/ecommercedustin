import React, { useState } from "react";

export const CartContext = React.createContext(); 

export const CartProvider = ({ children }) =>{
    const [productCarList, setproductCarList] = useState([])

    
    const addItem = (item, quantity) => {
        console.log('item', item , 'quantity', quantity)
        const newProduct = {
            ...item,
            quantity
            // id: item.id,
            // title: item.title,
            // quantity: quantity
            
        }
        console.log('newProduct', newProduct)
        const newArreglo = [...productCarList];
        newArreglo.push(newProduct)
        setproductCarList(newArreglo)
    }

    const removeItem = (itemId) => {
        console.log('itemId', itemId)
        const newArreglo = productCarList.filter(product=>product.id !== itemId)
        setproductCarList(newArreglo)
        
    }

    const clear = () => {
        setproductCarList([])
    }


    return (
        <CartContext.Provider value = {{productCarList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>


    )
}


export default CartProvider;