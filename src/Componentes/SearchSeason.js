import React from 'react';
//import {Stats} from '../Componentes/Stats';
import '../css/stats.css';
import { useState } from 'react';

export function SearchSeason () {
    const [selected, setSelected] = useState();
    
    const handleChange = event => {
        let temporada = event.target.value; 
        setSelected(event.target.value);
        console.log(temporada);
        window.location.href = "/estadisticatemporada/" + temporada;
        
    };
    return(
        <div className='container' id='allmatchs'>
           <div className='row justify-content-center mt-3' >
           <div className='col-12 text-center'>
          <h2 className='titleallmatchs'> BUSCAR POR TEMPORADA</h2>
          </div>
          </div>
        <div className='row justify-content-center mt-3' id='content-matchs'>
           
              <div className='col-4 text-center'>
              <select className="form-select form-select-lg mb-3 mt-5" value={selected} onChange={handleChange} >
                              <option selected>Seleccione una temporada</option>  
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>

                      </select>
              </div>
              </div>
        </div>     
    );
}