import React from 'react'
import './ItemCount.css'

const Botton = ({texto, botonclase, botonClick, disabled}) => {
  return (
    <button className={botonclase ? 'botonmas' : 'botonmenos'}
        disabled={disabled}
        onClick={botonClick}>
        {texto}
        </button>
  )
}

export default Botton