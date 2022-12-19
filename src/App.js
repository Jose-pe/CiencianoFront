
import './App.css';
import './css/bootstrap/bootstrap.css';
import Navbar from './Componentes/Navbar';
import {Matchcontent} from './Componentes/Matchcontent';

import {CreateMatch} from './Componentes/CreateMatch';
import {ShowMatches} from './Componentes/ShowMatches';
import {ShowStats} from './Componentes/ShowStats';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from 'react-router-dom';
import { RenewMatch } from './Componentes/RenewMatch';
import { ShowMatchComplete } from './Componentes/ShowMatchComplete';
import { SearchSeason } from './Componentes/SearchSeason';
import { CreateGol } from './Componentes/CreateGol';
function App() {
  //RUTAS
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Matchcontent></Matchcontent>}>
        </Route>
        <Route path='/estadisticas' element={<SearchSeason></SearchSeason>}>
        </Route>
        <Route path='/partidos' element={<ShowMatches></ShowMatches>}>
        </Route>
        <Route path='/crearpartido' element={<CreateMatch></CreateMatch>}>
        </Route>
        <Route path='/renewmatch' element={<RenewMatch></RenewMatch>}>
        </Route>
        <Route path='/datosdematch/:id' element={<ShowMatchComplete></ShowMatchComplete>}>
        </Route>
        <Route path='/estadisticatemporada/:temporada' element={<ShowStats></ShowStats>}>
        </Route>
        <Route path='/addgol' element={<CreateGol></CreateGol>}>
        </Route>
        
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
