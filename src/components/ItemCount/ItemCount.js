import React, { useContext } from 'react'
import './ItemCount.css'
import Botton from './Botton'
import { CartContext } from '../context/CartContext.js';


const ItemCount = ( { productocomprar } ) => {

const {addItem} = useContext(CartContext);


const onAdd = (producto) =>{

  console.log(`Comprastes ${producto} unidades de ${productocomprar}`)
  

}
 


  return (
    <div className='contador'>

    <Botton
    initial={1}
    stock={10}
    onAdd={onAdd}
      
    
    />


    </div>
  )
}

export default ItemCount;