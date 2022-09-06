import NavBar from './components/NavBar';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/ItemCount/Contador';
import Botton from './components/ItemCount/Botton';
import AgregarCarrito from './components/ItemCount/AgregarCarrito';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';


function App() {
  // let saludo = 'Hola mundo';
  // const styles = {
  //   cuadroTres: {
  //     width: '200px',
  //     height: '200px',
  //     backgroundColor:'green',
  //   },
  // }

  const [numclick, setnumclick] = useState(1)

  const botonmas = () =>{
    setnumclick(numclick + 1)
  }

  const botonmenos = () =>{
    setnumclick(numclick - 1)
  }

  return (
    <div>
      <NavBar/>   
      <ItemListContainer
      nombre='Ecommercer Dustin'
      parrafo='El saludo es un acto de saludar que se saluda en un saludo comunicacional en el que una persona hace notar a otra su presencia, generalmente a través del habla o de algún gesto. Según el DRAE, «saludar»'
      />
      
      <Contador
      numero = {numclick}
      />
      <Botton
      disabled={numclick == 5}
      texto='+'
      botonclase={false}
      botonClick={botonmas}
      />
      <Botton
      disabled={numclick <= 1}
      texto='-'
      botonclase={true}
      botonClick={botonmenos}
      />

      <AgregarCarrito/>

      <ItemListContainer2/>      

    </div>
  );
}

export default App;
