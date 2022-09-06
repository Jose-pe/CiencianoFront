
import './App.css';
import './css/bootstrap/bootstrap.css';
import Navbar from './Componentes/Navbar';
import {Matchcontent} from './Componentes/Matchcontent';
import {Stats} from './Componentes/Stats';
import {CreateMatch} from './Componentes/CreateMatch';
import {ShowMatches} from './Componentes/ShowMatches';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { RenewMatch } from './Componentes/RenewMatch';
import { ShowMatchComplete } from './Componentes/ShowMatchComplete';
function App() {
  //RUTAS
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Matchcontent></Matchcontent>}>
        </Route>
        <Route path='/estadisticas' element={<Stats></Stats>}>
        </Route>
        <Route path='/partidos' element={<ShowMatches></ShowMatches>}>
        </Route>
        <Route path='/crearpartido' element={<CreateMatch></CreateMatch>}>
        </Route>
        <Route path='/renewmatch' element={<RenewMatch></RenewMatch>}>
        </Route>
        <Route path='/datosdematch/:id' element={<ShowMatchComplete></ShowMatchComplete>}>
        </Route>
        
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
