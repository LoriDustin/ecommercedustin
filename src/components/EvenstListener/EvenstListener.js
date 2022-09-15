import React, { useEffect, useState } from 'react'

const EvenstListener = () => {

    const [isMobile, setisMobile] = useState(false);


    const hacerClick = (evt) => {
        console.log('Click', evt)
        console.log(evt.nativeEvent)
    }
    const cambiarFn = () => {
        console.log('Texto cambiando')
    }

    useEffect(() => {
        window.addEventListener('click', hacerClick)
        return ()=>{
            console.log('Evento Listener desmontado')
            window.removeEventListener('click', hacerClick)
        }
    },[])

    const checkResolution = ()=>{
        if( window.innerWidth  < 500){
            setisMobile(true)
        }else{
            setisMobile(false)
        }


        // console.log(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("load", checkResolution)
        return ()=>{
            console.log('Evento Listener desmontado')
            window.removeEventListener("load", checkResolution);
        }
    },[])


  return (
    <div> 
        <p>EvenstListener </p>
        
        <button onClick={hacerClick}>Hacer Click</button>
        <input onChange={cambiarFn} placeholder='email'/>

        {
            isMobile ? 
            <p>Estas en mobile</p> 
            : 
            <p> Estas desde un computador</p>
        }



    </div>

  )
}

export default EvenstListener