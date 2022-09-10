import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//importar paginas principales
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';

//Componentes
import  {Navbar} from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Container>
    </>
  )
}


export default App
