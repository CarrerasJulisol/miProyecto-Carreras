import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ModalCarrito from './components/ModalCarrito';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CartContext from './context/CartContext';
import { CartProvider } from './context/CartContext';
import { useState } from 'react';
import ProductDetail from './components/ProductDetail';

function App() {
  // en CARRITO
  const [cantTotal, setCantTotal] = useState() //cantidad total de productos
  const [item, setItem] = useState([{}]) //cuales productos




  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' >
          <Route index element={<Home />} />
          <Route path='productos'>
            <Route index element={<ItemListContainer />} />
            <Route path=':productoId' element={<ProductDetail />} />
            <Route path='categoria'>
              <Route path=':categoria'/>
            </Route>
          </Route>
          <Route path='carrito' element={<ModalCarrito />}/>
          <Route path='mi-cuenta' />
          <Route path='ayuda' />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;
