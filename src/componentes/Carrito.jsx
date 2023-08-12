import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const Carrito = () => {

    const {carrito, totalCarrito,vaciarCarrito} = useContext(CartContext);


  return (
    <div className='container'>
        <h1 className='main-title'>Carrito de compras</h1>
        {carrito.map((prod) => (
            <div key={prod.id}>
                <h2>{prod.titulo}</h2>
                <p>Precio Unitario: ${prod.precio}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio total: {prod.precio * prod.cantidad}</p>
                <br />
                  
            </div>
        ))}

        {
            carrito.length > 0 ?
                <>
                <h2>total de esta compra: $ {totalCarrito()}</h2>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>

                <Link to="/checkout">Finalizar compra</Link>

                </>
            : <h2>El carrito esta vacio</h2>
         }  




       
    </div>
  )
}

export default Carrito