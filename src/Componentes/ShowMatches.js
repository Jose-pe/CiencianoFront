import React from 'react';
import {Match} from '../Componentes/Match';
import '../css/showmatches.css';
import { useEffect, useState } from 'react';

export function ShowMatches () {
    const url = 'http://192.168.1.66/api/todospartidos'

    const [matchs, setMatchs] = useState([]);

    const fetchMatchs= (url)=>{
        fetch(url)
        .then(response => response.json())
        .then(data=> setMatchs(data.data))
        .catch(error=> console.log(error) )

    };
    useEffect(() =>{
        fetchMatchs(url);                
    },[]);


  

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12' id='titlecontainer'>
                <h2 className='titleallmatchs'>TODOS LOS PARTIDOS</h2>  
                </div>
               
            </div>
            <div className='container' id='allmatchs'>
                <div className='row' id='content-matchs' >
                          <div className='col-12'>
                          <Match matchs={matchs} />       
                          </div>          
                </div>
             
            </div>
          
            
              
            
        
            
        </div>
    )
}