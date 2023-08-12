
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto'
import { CartProvider } from './context/CartContext';
import Carrito from './componentes/Carrito';
import Checkout from './componentes/Checkout';

function App() {
  return (
    // En este caso envolvemos la app en el CartProvider, que se encuentra dentro de CartContext.jsx...
    
     <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/carrito' element={<Carrito />}/>
          <Route path='/checkout' element={<Checkout />}/>

          
        </Routes>
      </BrowserRouter>
     </CartProvider>
  )
}

export default App
