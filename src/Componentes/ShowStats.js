import React from 'react';
import {Stats} from '../Componentes/Stats';
import '../css/stats.css';
import { useEffect, useState } from 'react';

export function ShowStats () {
    
    const [selected, setSelected] = useState();
    let temporada;
    const handleChange = event => {
   
     temporada = setSelected(event.target.value);

    };
    
    const url = 'http://cienciano.in/api/statstemporada/' + temporada;

    const [stats, setStats] = useState([]);

    const fetchStats= (url)=>{
        fetch(url)
        .then(response => response.json())
        .then(data=> setStats(data))
        .catch(error=> console.log(error) )

    };
    useEffect(() =>{
        fetchStats(url);                
    },[]);
    
   


  

    return(
        <div className='container-fluid'>
          
           
          <div className='row justify-content-center mt-3'>
                <div className='col-4 text-center'>
                <select className="form-select form-select-lg mb-3" value={selected} onChange={handleChange}  aria-label=".form-select-lg example">
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>

                        </select>
                </div>
                </div>
                          <Stats stats={stats} />       
                     
             
            </div>
          
            
              
            
        
            
    
    )
}