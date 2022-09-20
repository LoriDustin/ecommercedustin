import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartContainer = () => {
    const {productCarList, removeItem, clear} = useContext(CartContext)
  return (

    <div>CartContainer
      <div>
        {productCarList.map(item =>(
          <div>
            <p>{item.title} - {item.quantity}</p>
            <button onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
          </div>
        ))}

        <button onClick={()=> clear()}>Vaciar el Carrito</button>
      </div>
  
    </div>
  )
}

export default CartContainer