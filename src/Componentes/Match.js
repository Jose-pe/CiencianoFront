import React from 'react';
import { Link } from 'react-router-dom';
import '../css/match.css';


export function Match({matchs=[]}){

   



    return(
        <div className='match'>
            {
                                              matchs.map((item, index)=>(
                                                
                                                <div  key={index} className='container mt-4' >
                                                <Link to={'/datosdematch/'+ item.id}>
                                                <div className='row justify-content-center'>
                                                        <div className='col-9  text-center'>
                                                        <div className='alert alert-secondary' role="alert" id='scoreboard'>
                                                            <div className='row'>
                                                                   <div className='col-12'>
                                                                    <div className='row'>
                                                                        
                                                                        
                                                                        <div className='col-4 text-center'>
                                                                            <p id='datadate'>
                                                                                 {item.fecha}   
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-4 justify-content-center'>
                                                                            <p id='league'>
                                                                                    {item.competencia}
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-4 justify-content-center'>
                                                                            <p id='datadate'>
                                                                                    {item.hora}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                        
                                                                        <div className='row justify-content-center'>
                                                                             <div className='col-6'>
                                                                                <p id='score'>
                                                                                {item.marcador}
                                                                                </p>
                                                                             </div>
                                                                             <div className='col-6'>
                                                                                            <p id='score'>
                                                                                           {item.rival}                                  
                                                                                           </p>
                                                                             </div>
                                                                        </div>
                                                                   </div> 
                                                            </div>
                                                            <div className='row'>
                                                             
                                                                <div className='col-12'>
                                                                    <p id='league'>
                                                                    {item.resultado}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                            
                                                </Link>
                                            </div>   

                                                ))                                                
                                            }
                                           
           
        </div>
    );
}