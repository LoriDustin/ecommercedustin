import './Item.css'
import { Link } from 'react-router-dom'

const ItemList = ( { data } ) => {
  return (
    <div className='ItemListCart'>
       { data.map((list, index) =>{
            return (
              <div className='container' key={index}>
                <h1 className='tituloProducto'> Producto: {list.title} </h1>
                <img className='imagen' src={list.image} alt={list.title} />
                <p className='Precio'>Precio : S/. {list.precio}</p>
                <p className='stock'>En stock: {list.stock}</p>
              <Link to={`/detalle/${list.id}`}>
              <button className='boton-ver'>Ver detalle...</button>
              </Link>
              </div>
                // <Item
                // key={list.id}
                // title={list.title}
                // image={list.image}
                // precio={list.precio}
                // stock={list.stock}
                // />
            )
        })
        }
    </div>
  )
}

export default ItemList