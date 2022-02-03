import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ModalCarrito from './components/ModalCarrito';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ModalCarrito />
      <Routes>
        <Route path='/' >
        <Route index element={<Home />} />
        <Route path='productos'>
          <Route index element={<ItemListContainer />} />
          <Route path="categoria">
            <Route path=":categoria" element={<ItemListContainer />}></Route>
          </Route>
        </Route>
        <Route path='mi-cuenta' />
        <Route path='ayuda' />
        </Route>
      
        
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
