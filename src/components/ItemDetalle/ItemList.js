import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemList = ({productos}) => {
 

  return (
    <div>
        {
          productos.map((producto, index) => (
            <div key={index}>
              
              <p>Producto:  {producto.title}</p>
              <p>Precio : S/.{producto.precio}</p>
              <img src={producto.image} alt='No encontrado'/>

              <ItemCount />
            </div>
          ))
            

          


        } 
     
      
      </div>
  )
}

export default ItemList