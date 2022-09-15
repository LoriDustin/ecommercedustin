import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/carpcomponents/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import ItemListContainerDetalle from './components/ItemDetalle/ItemListContainerDetalle';
import ContactoPage from './components/ContactoPage/ContactoPage';
import EvenstListener from './components/EvenstListener/EvenstListener';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Comportamientos from './components/Comportamientos/Comportamientos';
import Burbujeo from './components/Burbujeo/Burbujeo';




function App() {
  
  
  return ( 
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer /> } /> 
          <Route path='/contacto' element={<ContactoPage/> } /> 
          <Route path='/productos' element={<ItemListContainer2/> } />
          <Route path='/productos/:categoryId' element={<ItemListContainer2/> } />
          <Route path='/title/:productId' element={<ItemListContainer2/>} />
          <Route path='/evento-listener' element={<EvenstListener/>} />
          <Route path='/comportamientos-eventos' element={<Comportamientos/>} />
          <Route path='/burbujeo' element={<Burbujeo/>} />
          <Route path='/detalleProducto' element={<ItemListContainerDetalle/>} />

          {/* <Route path='/productos/limpiadores' element={<ItemListContainer2/> } /> */}


        </Routes>
        
       
        {/* 
        <ItemListContainer />

        <ItemCount/>
             
        <ItemListContainerDetalle/> */}
      
    </div>
    </BrowserRouter>


    
  );
}

export default App;
