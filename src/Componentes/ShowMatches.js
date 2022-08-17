import React from 'react';
import {Match} from '../Componentes/Match';

import '../css/showmatches.css';


import { useEffect, useState } from 'react';

export function ShowMatches () {
    const url = 'http://cienciano.in/api/partidos'

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
        <div>
            
        
          
            <Match matchs={matchs} />
            
              
            
        
            
        </div>
    )
}