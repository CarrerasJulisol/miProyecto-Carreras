import './App.css';
import Card from './components/card';
import ItemCount from './components/ItemCount';
import ModalCarrito from './components/ModalCarrito';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ModalCarrito />
      <Card />
    </div>
    
  );
}

export default App;
