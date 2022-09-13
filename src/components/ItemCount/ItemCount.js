import React from 'react'
import './ItemCount.css'
import Botton from './Botton'

const ItemCount = () => {
const onAdd = (producto) =>{
  console.log(`Comprastes ${producto} unidades`)
}
 


  return (
    <div className='contador'>

    <Botton
    initial={3}
    stock={15}
    onAdd={onAdd}
    />


    </div>
  )
}

export default ItemCount;