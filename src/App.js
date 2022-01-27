import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ModalCarrito from './components/ModalCarrito';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ModalCarrito />
      <ItemListContainer />
    </div>
    
  );
}

export default App;
