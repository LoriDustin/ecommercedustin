import logo from '../../logo.svg';
import './NavBar.css';
import CartWitdget from './CartWitdget';
import { Link, NavLink  } from 'react-router-dom'


const NavBar = () =>{
    const ImgReact = {
        width: '100px',
        backgroundColor: 'red',
    }

    return(
        <div className='heard'>
            <div>
                <Link to='/'>
                    <img style={ImgReact} src={logo} alt='logo'/>
                </Link>
                
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos'>Productos</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos/Aceite'>Aceite</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos/Arroz'>Arroz</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "claseActivo" : "claseInactivo" } to='/productos/Chocolate'>Chocolate</NavLink>
                    </li>
                    <li>
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
                    </li>
                 
                </ul>
            </div>
            <div>
                <CartWitdget/>
            </div>

        </div>

    );
};

export default NavBar;





