import React from 'react'
import './ItemCount.css'
import Botton from './Botton'



const ItemCount = ( { onAdd } ) => {


 


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