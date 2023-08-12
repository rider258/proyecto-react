
import { Link } from 'react-router-dom'
import React from 'react'
import CartWidget from './CartWidget'



const NavBar = () => {
    return (
        <nav className='navBar'>
            <Link to="/" className="logo">3D Tienda</Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/" >Inicio</Link></li>
                <li><Link className="menu-link" to="/productos" >Productos</Link></li>
                <li><Link className="menu-link" to="/productos/modelos" >Modelos</Link></li>
                <li><Link className="menu-link" to="/productos/filamentos" >Filamentos</Link></li>
                <li><Link className="menu-link" to="/productos/impresoras" >Impresoras</Link></li>
                <li><Link className="menu-link" to="/nosotros" >Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto" >Contacto</Link></li>
                
            </ul>

            <CartWidget />
        </nav>
    )
}
export default NavBar