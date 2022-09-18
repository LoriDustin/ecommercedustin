import React from 'react'
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemList = ({ productos }) => {
 

  return (
    <div>
        {
          productos.map((producto, index) => (
            

             <div className='Itemlist' key={index}>
              <h2 className='TitleItemlist'>{producto.title}</h2>
              <div className='flexItemlist'> 
                <img className='imgItemlist' src={producto.image} alt='No encontrado'/>
                <div> 
                <p>Precio : S/.{producto.precio}</p>        
                <ItemCount />
                </div>
              </div>
            </div>

          ))
        } 
     
      
      </div>
  )
}

export default ItemList