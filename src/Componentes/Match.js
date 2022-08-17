import React from 'react';
import '../css/match.css';


export function Match({matchs=[]}){

   



    return(
        <div className='match'>
            {
                                              matchs.map((item, index)=>(
                                                <div  key={index} className='container mt-4'>
                                                <div className='row justify-content-center'>
                                                        <div className='col-9  text-center'>
                                                        <div className='alert alert-secondary' role="alert">
                                                            <div className='row'>
                                                                   <div className='col-12'>
                                                                    <div className='row'>
                                                                        
                                                                        
                                                                        <div className='col-4 text-center'>
                                                                            <p>
                                                                                 {item.fecha}   
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-4 justify-content-center'>
                                                                            <p>
                                                                                    {item.competencia}
                                                                            </p>
                                                                        </div>
                                                                        <div className='col-4 justify-content-center'>
                                                                            <p>
                                                                                    {item.hora}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                        
                                                                        <div className='row justify-content-center'>
                                                                             <div className='col-5'>
                                                                                {item.marcador}
                                                                             </div>
                                                                             <div className='col-5'>
                                                                                           {item.rival}                                  
                            
                                                                             </div>
                                                                        </div>
                                                                   </div> 
                                                            </div>
                                                            <div className='row'>
                                                             
                                                                <div className='col-12'>
                                                                    {item.resultado}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                            
                                                
                                            </div>   

                                                ))                                                
                                            }
                                           
           
        </div>
    );
}