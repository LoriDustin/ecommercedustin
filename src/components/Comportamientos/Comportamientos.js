import React from 'react'

const Comportamientos = () => {

  const enviarFormulario = (event) =>{
        event.preventDefault(); //Para enviar el formulario
        console.log('Se envio el formulario')
  }
  
    return (
    <div>
        <p>Comportamientos</p>
        <form onSubmit={enviarFormulario}>
            <input placeholder='email'/>
            <button type='submit'>Enviar formulario </button>
        </form>
    </div>
  )
}

export default Comportamientos