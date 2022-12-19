import React from 'react';
import '../css/renewmatch.css';
import {Match} from '../Componentes/Match';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export function RenewMatch(){

       
        //let match = document.getElementsByClassName('match');
       
            let counts = 1;
            let pagenumber= 1 + counts ;
     
        
 
        let urlpagination = 'http://192.168.1.66/api/partidos?page=' + pagenumber;
        
        
        //console.log("fetchea a " + urlpagination);
        const [matchs, setMatchs] = useState([]);
        const fetchMatchspagination= (urlpagination)=>{
         fetch(urlpagination)
         .then(response => response.json())
         .then(data=> setMatchs(data.data))        
         .catch(error=> console.log(error) )
        
     };
            useEffect(() =>{
                fetchMatchspagination(urlpagination);            
                
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
                <Link className="btn btn-danger btn-lg" to={'/partidos'}  role="button">Más Partidos</Link>
               </div>  
        </div>
                    </div>
                    </div>
                    </div>
        </div>
       
</div>
   
    

    );
}
