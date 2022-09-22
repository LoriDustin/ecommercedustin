import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartContainer = () => {
    const {productCarList, removeItem, clear, getTotalPrice} = useContext(CartContext)
    console.log(productCarList)

  return (

    <div>
      {
        productCarList.length > 0 ? 
        <div>
            {productCarList.map(item =>(
                <div style={{border: '1px solid black', margin: '10px', width: '200px'}}>
                  <p>{item.title}</p>
                  <p> Cantidad: {item.quantity}</p>
                  <p> Precio unitario: S/. {item.precio}</p>
                  <p> Precio Producto: S/. {item.quantityPrice}</p>
                  <button onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
                </div>
                ))}

              <button onClick={clear}>Vaciar el Carrito</button>
              <p>Precio total: {getTotalPrice()}</p>
              {/* <button onClick={()=>isIncart(2)}>Validacion</button> */}
                  
        </div>

              :
                  <>
                    <p>El carrito esta vacio, Agrega algun producto</p>
                   <Link to='/productos' >
                    Ir al listado de productos
                   </Link >
                  </>
      }
     
  
    </div>
  )
}

export default CartContainer