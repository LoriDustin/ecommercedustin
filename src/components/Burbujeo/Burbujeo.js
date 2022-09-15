import React, { useState } from 'react'
import './Burbujeo.css'

const Burbujeo = () => {
    const [openModal, setopenModal] = useState(false);

    const showModal = () =>{
        setopenModal(!openModal)
    }

    const detenerPropagacion = (event) =>{
        event.stopPropagation()
    }


  return (
    <div>
        <button onClick={showModal}> Abril modal</button>
        {
            openModal ? 
            <div className='background-modal' onClick={showModal}>
                <div className='modal' onClick={detenerPropagacion} > 
                    <button onClick={showModal}>Cerrar</button>
                </div>    
            </div>
            :
            null
        }


    </div>
  )
}

export default Burbujeo