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
      <div className='OrdeContador'>
        <button className='buttonReducir' disabled={count <= 1} onClick={reducir}>-</button>
        <span>{count}</span>
        <button className='buttonAumentar' disabled={count >= stock} onClick={aumentar}>+</button>
      </div>
      <div>
          <button className='ButtonAgregar' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito (console.log(esta1))</button>
      </div>
    </div>
  )
}

export default Botton