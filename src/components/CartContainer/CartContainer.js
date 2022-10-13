import React from 'react'
import "./CartContainer.css"
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { db } from '../../utils/firebase'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'


const CartContainer = () => {
    const {productCarList, removeItem, clear, getTotalPrice} = useContext(CartContext)
    const [ idOrder, setidOrden] = useState('')

    console.log(productCarList)



    const sendOrder = (event) =>{
      event.preventDefault();
      // console.log('orden enviada', event)
      // console.log('nombre', event.target[0].value)
      // console.log('telefono', event.target[1].value )
      const order = {
        buyer: {
          name: event.target[0].value,
          phone: event.target[1].value,
          email: event.target[2].value
        },
        items: productCarList,
        total: getTotalPrice()
        
      }
      console.log('order', order)
      //Crear la referencia donde se va guardar el documento
      const queryRef = collection(db, 'orders')
      //Crear el documento 
      addDoc(queryRef, order).then(response=>{
        console.log('response', response)
        setidOrden(response.id)
        clear();
      })

    }

    const updateOrder = () =>{
      //Crear la referencia
      const queryRef = doc(db,'orders', 'HsoXTwilVNKrFUOsId8Z')
      updateDoc(queryRef,{
        total: 80
      }).then(response=> console.log(response))
    }


  return (

    <div className='ListCompraProducto'>
      {/* <button className='ButtonActualizar' onClick={updateOrder}>Actualizar Orden</button> */}
      {idOrder ?
      <>
      <p className='OrdenCreado'> Muchas Gracias! .Su orden fue creado, id {idOrder}</p>
      <Link to='/productos' className='LinkProducto' >
      Ir al listado de productos
      </Link >

      </>
        
        :
        <div> 

{
        productCarList.length > 0 ? 
        <div className='ProductoComprado'>
            {productCarList.map(item =>(
                <div className='ProductoSeleccionado'>
                  <p className='NombreProducto'>{item.title}</p>
                  <p> Cantidad: {item.quantity}</p>
                  <p> Precio unitario: S/. {item.precio}</p>
                  <p> Total: S/. {item.quantityPrice}</p>
                  <button onClick={()=> removeItem(item.id)}>Eliminar</button>
                </div>
                ))}

              <p className='TotalCompra'>Precio total: {getTotalPrice()}</p>
              <button className='buttonClear' onClick={clear}>Vaciar el Carrito</button>
              
              <form className='FormularioProducto' onSubmit={sendOrder}>
                <label>Nombre: </label>
                <input type='texto'/>
                <label>Telefono: </label>
                <input type='texto'/>
                <label>Correo: </label>
                <input type='email'/>
                <button type='submit'>Enviar Orden</button>
              </form>


              {/* <button onClick={()=>isIncart(2)}>Validacion</button> */}
                  
        </div>

              :
                  <div className='CarritoVacido'>
                    <p>El carrito esta vacio, Agrega algun producto</p>
                   <Link to='/productos' className='LinkProducto'>
                    Ir al listado de productos
                   </Link >
                  </div>
      }

        </div>
      
      }
  
      
    </div>


  )
}

export default CartContainer