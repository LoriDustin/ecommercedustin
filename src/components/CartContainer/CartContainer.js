import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartContainer = () => {
    const value = useContext(CartContext)
  return (

    <div>CartContainer
      <div>
        {value.productCarList.map(item =>(
          <p>{item}</p>
        ))}
      </div>
  
    </div>
  )
}

export default CartContainer