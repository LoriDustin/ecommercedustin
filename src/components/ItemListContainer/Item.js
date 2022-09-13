import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'


const Item = ({image, title, precio, stock}) => {
  return (
    <div className='container'>
        <h1>Producto: {title} </h1>
        <img className='imagen' src={image} alt={title} />
        <p>Precio : {precio}</p>
        <p className='stock'>En stock: {stock}</p>
        <Link to={`/title/${title.id}`}>
        <button className='boton-ver'>Ver detalle...</button>
        </Link>

        

    </div>
  )
}

export default Item