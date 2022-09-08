import React from 'react'

const ItemList = ({productos}) => {
 

  return (
    <div>
        {
          productos.map((producto, index) => (
            <div key={index}>
              
              <p>Producto:  {producto.productos}</p>
              <p>Precio : S/.{producto.precio}</p>
              <img src={producto.img} alt='No encontrado'/>
            </div>
          ))
            

          


        } 
     
      
      </div>
  )
}

export default ItemList