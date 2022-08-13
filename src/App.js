
import './App.css';
import './css/bootstrap/bootstrap.css';
import Navbar from './Componentes/Navbar';
import {Matchcontent} from './Componentes/Matchcontent';
import {Stats} from './Componentes/Stats';
import {CreateMatch} from './Componentes/CreateMatch';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Matchcontent></Matchcontent>}>
        </Route>
        <Route path='/estadisticas' element={<Stats></Stats>}>
        </Route>
        <Route path='/crearpartido' element={<CreateMatch></CreateMatch>}>
        </Route>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
