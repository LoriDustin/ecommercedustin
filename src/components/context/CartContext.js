import React, { useState } from "react";

export const CartContext = React.createContext(); 

export const CartProvider = ({ children }) =>{
    const [productCarList, setproductCarList] = useState([])

    const isIncart = (productId) => {
        const productExist = productCarList.some(item=>item.id === productId)
        console.log(productExist)
        return productExist
    }



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
        //SI el producto exist, busquelo en el arreglo y remplaze la cantidad
        if(isIncart(item.id)){
            const productPos = productCarList.findIndex(product=>product.id === item.id)
            const newArreglo = [...productCarList]
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity *   newArreglo[productPos].precio

            setproductCarList(newArreglo)
        }
         //Sino existe, agregue el producto al carrito
        else{
            const newArreglo = [...productCarList]
            newProduct.quantityPrice = newProduct.quantity * newProduct.precio
            newArreglo.push(newProduct)
            setproductCarList(newArreglo)


        }

        // const newArreglo = [...productCarList];
        // newArreglo.push(newProduct)
        // setproductCarList(newArreglo)
    }

    const removeItem = (itemId) => {
        console.log('itemId', itemId)
        const newArreglo = productCarList.filter(product=>product.id !== itemId)
        setproductCarList(newArreglo)
        
    }

    const clear = () => {
        setproductCarList([])
    }

    const getTotalPrice = () =>{
        const totalPrice = productCarList.reduce((acc, item)=> acc + item.quantityPrice, 0)
        console.log(totalPrice)
    }



    return (
        <CartContext.Provider value = {{productCarList, addItem, removeItem, clear, isIncart, getTotalPrice}}>
            {children}
        </CartContext.Provider>


    )
}


export default CartProvider;