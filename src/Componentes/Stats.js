import React from 'react';
import '../css/stats.css';

export function Stats(){

    return (
        <div className='container'>
                <div className='row justify-content-center'>
                        <div className='col-8 text-center'>
                                <h2 className='title'> ESTADISTICAS POR TEMPORADA</h2>
                        </div>

                </div>
                <div className='row justify-content-center' id='matchcontent'>
                <div className='col-6 text-center' id='contentstats'>
                        <h3 className='subtitle' >ESTADISTICAS GLOBALES</h3>
                        <div className='row justify-content-center' >
                       <div className='col-4'>
                        <div className='row justify-content-center'>
                                   <h4 className='litletitle'>Goles</h4>     
                        </div>
                                <p>500</p>      
                       </div>         
                 </div>
                 <div className='row justify-content-center' >
                       <div className='col-4'>
                        <div className='row justify-content-center'>
                                   <h4 className='litletitle'>Tiros</h4>     
                        </div>
                                <p>500</p>      
                       </div>         
                 </div> 
                 <div className='row justify-content-center' >
                       <div className='col-4'>
                        <div className='row justify-content-center'>
                                   <h4 className='litletitle'>Tiros al Arco</h4>     
                        </div>
                                <p>500</p>      
                       </div>         
                 </div>      
                 <div className='row justify-content-center' >
                       <div className='col-4'>
                        <div className='row justify-content-center'>
                                   <h4 className='litletitle'>Pases</h4>     
                        </div>
                                <p>500</p>      
                       </div>         
                 </div>        
                 <div className='row justify-content-center' >
                       <div className='col-4'>
                        <div className='row justify-content-center'>
                                   <h4 className='litletitle'>Faltas</h4>     
                        </div>
                                <p>500</p>      
                       </div>         
                 </div>               
                </div>
                 <div className='row justify-content-center'>
                 <div className='col-6 text-center' id='contentstats'>
                 <h4 className='subtitle'>Promedio de Conversion de Goles</h4>   
                 <div className='row justify-content-center'>
                        <div className='col-10 mt-2 mb-4'>      
                        <div class="progress">
                         <div class="progress-bar" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">

                         </div>
                        </div>
                        </div>                       
                 </div>
                 </div>       
                 </div>
                </div>

                
        </div>
    );
}