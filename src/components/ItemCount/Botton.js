import React, {useState} from 'react'
import './ItemCount.css'


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
      <button disabled={count <= 1} onClick={reducir}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={aumentar}>+</button>
      <div>
          <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Botton