//Creación del widget del carrito

import { Link } from 'react-router-dom';
import '../css/Cart.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function CartWidget(){
    const { cantidadEnCarrito } = useContext(CartContext);
    
    return(
        
        <div className="cart-render">
             <Link className="menu-link enlace" to="/carrito" >
             <i className="bi bi-cart4"></i> <span className='numerito cart-cantidad'> {cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
}

export default CartWidget;