import React, { useContext } from 'react'
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext.js';

const ItemListDetalle = ({ producto }) => {
 
const {addItem} = useContext(CartContext);


const onAdd = (cantidad) =>{

  console.log(`Comprastes ${cantidad} unidades de ${producto.title}`)
  addItem(producto, cantidad)

}


  return (
    <div>

             <div className='Itemlist'>
              <h2 className='TitleItemlist'>{producto.title}</h2>
              <div className='flexItemlist'> 
                <img className='imgItemlist' src={producto.image} alt='No encontrado'/>
                <div> 
                <p>Precio : S/.{producto.precio}</p>        
                <ItemCount 
  
                onAdd= {onAdd}
                />
                </div>
              </div>
            </div>

          
       
     
      
      </div>
  )
}

export default ItemListDetalle