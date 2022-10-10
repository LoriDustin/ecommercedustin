import React, { useContext } from 'react'
import './ItemList.css'
import '../ItemCount/ItemCount.css'
import Botton from '../ItemCount/Botton'
// import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext.js';

const ItemListDetalle = ({ producto }) => {
 
const {addItem} = useContext(CartContext);


const onAdd = (cantidad) =>{

  console.log(`Comprastes ${cantidad} unidades de ${producto.title}`)
  addItem(producto, cantidad)


}


  return (
    <div className='CartList'>
        <div className='ItemlistCart'>
            <h2 className='TitleItemlist'>{producto.title}</h2>
            <div className='flexItemlist'> 
              <img className='imgItemlist' src={producto.image} alt='No encontrado'/>
              <div> 
                <p>Precio : S/.{producto.precio}</p>        
                <div className='contador'>
                  <Botton
                  initial={1}
                  stock={10}
                  onAdd={onAdd}/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ItemListDetalle