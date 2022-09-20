import carritodeCompra from '../IMG/carritodeCompra.png'
import { Link } from 'react-router-dom';

const CartWitdget = () => {

  return (
    <div>
      <Link to="/cart">
        <img src={carritodeCompra} alt='Imagen no encontrado' style={{width:20}} />
        <span style={{backgroundColor:"white", borderRadius:"50%", width:"10px", height:"10px", fontSize:"10px", color:"black" }}>2</span>
      </Link>
    </div>
  )
}

export default CartWitdget;