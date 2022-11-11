import React from 'react';
import {Stats} from '../Componentes/Stats';
import '../css/stats.css';
import { useEffect, useState } from 'react';

export function ShowStats () {
    const url = 'http://cienciano.in/api/statstemporada/2022'

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
          
           
               
                          <Stats stats={stats} />       
                     
             
            </div>
          
            
              
            
        
            
    
    )
}