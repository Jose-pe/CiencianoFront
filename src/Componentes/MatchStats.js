import React from 'react';
import '../css/matchstats.css';





export function MatchStats({datamatch=[], datagols=[]} ){
     
   

    return(
   
        <div className='container'>
        
            <div className='row justify-content-center'>
                    <div className='col-10 text-center' id='statspanel'>
                    <div className='row justify-content-center mt-3'>
                             <div className='col-4'>
                             <p id='leagues'>{datamatch.competencia}</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center mt-3'>
                             <div className='col-4'>
                             <p id='condition'>{datamatch.condicion}</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center mb-4 mt-2'>
                            <div className='col-4'>
                            <p className='matchdate'> <strong className='titlesstats'> Fecha </strong><br/>   
                            {datamatch.fecha}</p>
                            </div>
                            <div className='col-4'>
                            <p className='matchrival'> <strong className='titlesstats'> Rival </strong> <br/> {datamatch.rival}</p>
                            </div>
                            <div className='col-4'>
                            <p className='matchdate'><strong className='titlesstats'> Hora </strong><br/> {datamatch.hora}</p>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-10'>

                             <p className='matchstatsnum'> <strong className='titlesstats'> Marcador </strong> <br/>{datamatch.marcador}</p>
                             <p className='matchrival'> {datamatch.resultado}</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-5'>

                             <p className='matchstatsnum'><strong className='titlesstats'> Tiros </strong> <br/>{datamatch.tiros}</p>
                             </div>   
                             <div className='col-5'>
                                <p className='matchstatsnum'> <strong className='titlesstats'> Tiros al Arco </strong> <br/>{datamatch.tiros_arco}</p>
                            </div>  

                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-10'>
                             <p className='matchstatsnum'><strong className='titlesstats'> Posesión del Balon </strong> <br/>{datamatch.posesion_balon}%</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-10'>
                             <p className='matchstatsnum'> <strong className='titlesstats'> Pases </strong><br/>{datamatch.pases}</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-10'>
                             <p className='matchstatsnum'><strong className='titlesstats'> Faltas </strong><br/>{datamatch.faltas}</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-5'>

                             <p id='yellow'><strong className='titlesstats'> Tarjetas Amarillas </strong> <br/>{datamatch.tarjeta_amarilla}</p>
                             </div>   
                             <div className='col-5'>
                                <p id='red'><strong className='titlesstats'> Tarjetas Rojas </strong><br/>{datamatch.tarjeta_roja}</p>
                            </div>  

                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-10'>
                             <p className='matchstatsnum'> <strong className='titlesstats'> Fueras de Juego </strong><br/>{datamatch.fuera_juego}</p>
                             </div>   
                        </div>
                        <div className='row justify-content-center'>
                             <div className='col-10'>
                             <p className='matchstatsnum'><strong className='titlesstats'> Tiros de Esquina </strong><br/>{datamatch.tiro_esquina}</p>
                             </div>   
                        </div>
                    </div>
                    <div className='container' id='golespanel'>
                    <div className='row justify-content-center'>
                         <div className='col-10 mt-4'>
                         <h3 className='text-center'>Goles del Partido</h3>
                         </div>
                        
                    </div>
                    {
                         datagols.map((gols, index)=>(

                              <div key={index}>
                                    <div className='row justity-content-center'>
                           <div className='col-4'>
                              <p className='text-center'>Autor: {gols.autor} </p>
                           </div>   
                           <div className='col-4'>
                              <p className='text-center'>min: {gols.minuto_juego}</p>
                           </div> 
                           <div className='col-4'>
                              <p className='text-center'>Tipo: {gols.tipo_gol}</p>
                           </div> 
                              </div>
                             
                              </div>
                         ))
                        // console.log("hola" + datagols)
                    }
                  
                    
                    
                   


                    </div>
                  
            </div>
         
        </div>

    );
}