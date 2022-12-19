import React from 'react';
import {Stats} from '../Componentes/Stats';
import '../css/stats.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ShowStats () {
    
    const {temporada}= useParams();
    
    const url = 'http://192.168.1.66/api/statstemporada/' + temporada;

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
          
           
          <div className='row justify-content-center'>
                        <div className='col-8 text-center'>
                                <h2 className='title'> ESTADISTICAS TEMPORADA {temporada} </h2>
                        </div>

                </div>
                          <Stats stats={stats} />       
                     
             
            </div>
          
            
              
            
        
            
    
    )
}