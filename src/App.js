import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/Productos/ItemListContainer';
import Carrito from './components/Carrito/Carrito';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import ProductDetail from './components/Productos/ProductDetail';
import Comprar from './components/Carrito/Comprar';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import Filtrar from './components/Filtrar';
import Preguntar from './pages/Preguntar';
import Footer from './components/Footer';
import FinCompra from './pages/FinCompra';

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
                  <Route path=':categoria' element={<Filtrar />}/>
                </Route>
              </Route>
            <Route path='carrito' element={<Carrito />}/>
            <Route path='finalizar-compra' element={<Comprar />}/>
            <Route path='compra-finalizada' element={<FinCompra />}/>
            <Route path='ayuda'>
              <Route path='preguntas-frecuentes' element={<PreguntasFrecuentes />} />
              <Route path='preguntar' element={<Preguntar />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    
  );
}

export default App;
