
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/Nosotros' element={<Nosotros />} />
        </Routes>



        
      </BrowserRouter>

    </>
  )
}

export default App
