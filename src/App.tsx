import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//importar paginas principales
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import Register from './components/Register';
import Login from './components/Login';

//Componentes
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/shoppingCartContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <div>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/registrarse" element={<Register />} />
              <Route path="/iniciar-sesion" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  )
}


export default App
