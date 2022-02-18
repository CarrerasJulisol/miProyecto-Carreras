import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/Productos/ItemListContainer';
import Carrito from './components/Carrito/Carrito';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import ProductDetail from './components/Productos/ProductDetail';
import Comprar from './components/Carrito/Comprar';
import FinCompra from './FinCompra';

function App() {
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
          <Route path='carrito' element={<Carrito />}/>
          <Route path='finalizar-compra' element={<Comprar />}/>
          <Route path='compra-finalizada' element={<FinCompra />}/>
          <Route path='mi-cuenta' />
          <Route path='ayuda' />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;
