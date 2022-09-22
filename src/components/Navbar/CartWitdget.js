import carritodeCompra from '../IMG/carritodeCompra.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartWitdget = () => {
  const {getTotalProducts} = useContext(CartContext);
  

  return (
    <div>
      <Link to="/cart">
        <img src={carritodeCompra} alt='Imagen no encontrado' style={{width:20}} />
        <span style={{backgroundColor:"white", borderRadius:"50%", width:"10px", height:"10px", fontSize:"10px", color:"black" }}>{getTotalProducts()}</span>
      </Link>
    </div>
  )
}

export default CartWitdget;