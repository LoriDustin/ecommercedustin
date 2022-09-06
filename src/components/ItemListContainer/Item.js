import React from 'react'
import './Item.css'

const Item = ({image, title, precio, stock}) => {
  return (
    <div className='container'>
        <h1>Producto: {title} </h1>
        <img className='imagen' src={image} alt={title} />
        <p>Precio : {precio}</p>
        <p className='stock'>En stock: {stock}</p>

    </div>
  )
}

export default Item