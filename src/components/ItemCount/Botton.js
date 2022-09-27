import React, {useState} from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom';

const Botton = ({initial, stock, onAdd}) => {

  const [count, setcount] = useState(initial);

  const aumentar = () => {
    setcount(count + 1)
  }

  const reducir = () =>{
    setcount(count - 1)
  }

  return (
    <div className='counter'>
      <div className='OrdeContador'>
        <button className='buttonReducir' disabled={count <= 1} onClick={reducir}>-</button>
        <span>{count}</span>
        <button className='buttonAumentar' disabled={count >= stock} onClick={aumentar}>+</button>
      </div>
      <div>
          <button className='ButtonAgregar' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
      {/* {
        count > 0 &&
        <Link to='/carts'>
          <button>Ir al carrito</button>
        </Link>
      } */}

    </div>
  )
}

export default Botton