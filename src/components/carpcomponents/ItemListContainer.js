import './ItemListContainer.css'
import CartWidget from './CartWidget'

const ItemListContainer = () => {
  return (
    <div className='ItemList'>
      <CartWidget
      nombre = 'Ecommercer Dustin'
      parrafo = 'El saludo es un acto de saludar que se saluda en un saludo comunicacional en el que una persona hace notar a otra su presencia, generalmente a través del habla o de algún gesto. Según el DRAE, «saludar»'
      />
      </div>
  )
}

export default ItemListContainer