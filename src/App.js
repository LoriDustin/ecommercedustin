import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/carpcomponents/ItemListContainer';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import ItemListContainerDetalle from './components/ItemDetalle/ItemListContainerDetalle';
import ContactoPage from './components/ContactoPage/ContactoPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './components/context/CartContext';

// import EvenstListener from './components/EvenstListener/EvenstListener';
// import Comportamientos from './components/Comportamientos/Comportamientos';
// import Burbujeo from './components/Burbujeo/Burbujeo';
import CartContainer from './components/CartContainer/CartContainer';










function App() {
  

  
  return ( 
      <CartProvider>
        <BrowserRouter>
              <div>

                <NavBar/>
                
                <Routes>
                  <Route path='/' element={<ItemListContainer/> } /> 
                  <Route path='/contacto' element={<ContactoPage/> } /> 
                  <Route path='/productos' element={<ItemListContainer2/> } />
                  <Route path='/productos/:categoryId' element={<ItemListContainer2/> } />
                  <Route path='/detalle/:detalleId' element={<ItemListContainerDetalle/>} />
                  <Route path='/cart' element={<CartContainer/>} />


                  {/* <Route path='/evento-listener' element={<EvenstListener/>} />
                  <Route path='/comportamientos-eventos' element={<Comportamientos/>} />
                  <Route path='/burbujeo' element={<Burbujeo/>} />
                  <Route path='/detalleProducto' element={<ItemListContainerDetalle/>} /> */}
                  {/* <Route path='/productos/limpiadores' element={<ItemListContainer2/> } /> */}


                </Routes>
                
              
                {/* 
                <ItemListContainer />

                <ItemCount/>
                    
                <ItemListContainerDetalle/> */}
              
            </div>
            </BrowserRouter>
        </CartProvider>
  );
}

export default App;
