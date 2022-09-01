import React from 'react'
import './ItemCount.css'

const Contador = ({numero}) => {
  return (
    <div className='contador'>
        {numero}
    </div>
  )
}

export default Contador;