import React from 'react';
import '../css/matchcontent.css';
import {Match} from '../Componentes/Match';
import Button_more from './Button_more';
import { useEffect, useState } from 'react';

export function Matchcontent() {

    //Mostrar Mas partidos
    const renewMatch = () =>{
       let match = document.getElementsByClassName('match');
       match[0].style.display='none';
       match[1].style.display='none';
       
    }

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
                            <h2 className='titulo'>ULTIMOS PARTIDOS</h2>
                        </div>
                </div>
                <div className='row justify-content-center'>
                        <div className='col-6 text-center' id='matchcontent'> 
                          
                            <div>
                            <Match
                             matchs={matchs}
                            />
                            </div>
                            <div className='row justify-content-center'>
                        <Button_more 
                            renewMatch={renewMatch}
                        />
                            </div>
                        </div>
                </div>
               
        </div>
    );        
}
