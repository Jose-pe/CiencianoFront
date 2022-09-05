import React from 'react';
import '../css/matchcontent.css';
import {Match} from '../Componentes/Match';

import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export function Matchcontent() {

    //Mostrar Mas partidos
   

    const [matchs, setMatchs] = useState([]);
    
    let url = "http://cienciano.in/api/partidos";

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
        <div className='container'>
                <div className='row'>
                        <div className='col-12 text-center'> 
                            <h2 className='title'>ULTIMOS PARTIDOS</h2>
                        </div>
                </div>
                <div className='row justify-content-center'>
                        <div className='col-8 text-center' id='matchcontent'> 
                          
                            <div>
                            <Match
                             matchs={matchs}
                            />
                            </div>
                            <div className='row justify-content-center'>
                            <div className='col-12'>
                            <div className='row'>
                      <div className='col-12'>
                        <Link className="btn btn-danger btn-lg" to={'/renewmatch'}  role="button"> Más Partidos</Link>
                       </div>  
                </div>
                            </div>
                            </div>
                            </div>
                </div>
               
        </div>
    );        
}
