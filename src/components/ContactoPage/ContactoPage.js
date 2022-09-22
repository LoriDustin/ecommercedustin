import React, {useState} from 'react'

const ComponenteTexto = ({value})=>{
  console.log('ComponenteTexto Primer renderizado')

  return(
    <p>{value}</p>
  )
}

const ComponenteInfoFija = React.memo(() =>{
  console.log('ComponenteTexto Segundo renderizado')
  return(
    <p> Contenido estatico </p>
  )
})


const ContactoPage = () => {
  const [value, setvalue] = useState('Primer texto')
  return (
    <div>
      ContactoPage
      <ComponenteTexto value={value} />
      <ComponenteInfoFija/>
      <button onClick={()=> setvalue('Otro texto')}>Cambiar</button>
    </div>
  )
}

export default ContactoPage