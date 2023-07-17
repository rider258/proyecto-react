
import { Link } from 'react-router-dom'
import React from 'react'
import CartWidget from './CartWidget'



const NavBar = () => {
    return (
        <nav className='navBar'>
            <Link to="/" className="logo">3D Tienda</Link>
            <ul className="menu">
                <li><Link  to="/" className="menu-link">Inicio</Link></li>
                <li><Link  to="/productos" className="menu-link">Productos</Link></li>
                <li><Link  to="/productos/modelos" className="menu-link">Modelos</Link></li>
                <li><Link  to="/productos/filamentos" className="menu-link">Filamentos</Link></li>
                <li><Link  to="/productos/impresoras" className="menu-link">Impresoras</Link></li>

            </ul>

            <CartWidget />
        </nav>
    )
}
export default NavBar