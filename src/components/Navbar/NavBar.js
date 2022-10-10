import logo from '../../logo.svg';
import './NavBar.css';
import CartWitdget from './CartWitdget';
import { Link, NavLink  } from 'react-router-dom'


const NavBar = () =>{

    return(
        <div className='heard'>
                <ul>
                    <li>
                    <Link to='/'>
                        <img  className='ImgReact' src={logo} alt='logo'/>
                    </Link>
                        
                    </li>

                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/'>INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos'>PRODUCTOS</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos/Aceite'>ACEITE</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos/Arroz'>ARROZ</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos/Chocolate'>CHOCOLATE</NavLink>
                    </li>

                    <li>
                        <CartWitdget/>
                    </li>


                    {/* <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" }  to='/evento-listener'>EvenstListener</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" }  to='/comportamientos-eventos'>Comportamientos</NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" }  to='/burbujeo'>Burbujeo</NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" }  to='/detalleProducto'>DetalleProducto</NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" }  to='/contacto'>Contact</NavLink>
                    </li>

                    <li>
                        <Link to='https://notube.site/es/youtube-app-v19' target='_blank'>Pagina Externa</Link>
                    </li> */}
                </ul>
        </div>

    );
};

export default NavBar;





