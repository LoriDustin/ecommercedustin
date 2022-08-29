import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  // let saludo = 'Hola mundo';
  // const styles = {
  //   cuadroTres: {
  //     width: '200px',
  //     height: '200px',
  //     backgroundColor:'green',
  //   },
  // }
  return (
    <div>
      <NavBar/>   
      <ItemListContainer
      nombre='Ecommercer Dustin'
      parrafo='El saludo es un acto de saludar que se saluda en un saludo comunicacional en el que una persona hace notar a otra su presencia, generalmente a través del habla o de algún gesto. Según el DRAE, «saludar»'
      />
     
    </div>
  );
}

export default App;
