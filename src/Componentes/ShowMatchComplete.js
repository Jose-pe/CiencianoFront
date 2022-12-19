import React from 'react';
import '../css/showmatchcomplete.css';
import {MatchStats} from '../Componentes/MatchStats';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';


export function ShowMatchComplete(){


    
   
    const {id}= useParams();

    const url = 'http://192.168.1.66/api/partidos/' + id;

    const [datamatch, setDataMatch] = useState([]);
    const [datagols, setDataGols] = useState([]);
    //console.log(url);
    const fetchMatchs= (url)=>{
        fetch(url)
        .then(response => response.json())
        .then(data=> setDataMatch(data.datamatch))
        .catch(error=> console.log(error) )

    };
    const fetchGols= (url)=>{
        fetch(url)
        .then(response => response.json())
        .then(data=> setDataGols(data.goldata))
        .catch(error=> console.log(error) )

    };

    useEffect(() =>{
        fetchMatchs(url);    
        fetchGols(url);            
    },[]);
    console.log();

    return(
        <div className='container'>
            <div className='row'>
                  <div className='col-12 text-center'>
                  <h2 className='title'>ESTADISTICAS DEL PARTIDO</h2>        
                  </div>  
            </div>
            <div className='row' id='matchcontent'>
            
          <MatchStats
              datamatch={datamatch}
               datagols={datagols} 
            />
              
            </div>
            

        </div>
    );  

}