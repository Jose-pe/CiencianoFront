import React, { useState, useEffect } from 'react';
import '../css/creategol.css';




export function CreateGol(){
   
   const[autor, setAutor] = useState([]);
   const[minuto_juego, setMinuto_juego] = useState('');
   const[tipo_gol, setTipo_gol] = useState('');
   //const[id_partido, setId_partido]= useState('');

   const inputautor = e => setAutor(e.target.value);
   const inputminuto_juego = e => setMinuto_juego(e.target.value);
   const inputtipo_gol = e => setTipo_gol(e.target.value);
   //const inputid_partido = setId_partido;
    
   function limpiar() {
    let autor = document.getElementById('autor');
    let minuto = document.getElementById('minuto_juego');
    let tipogol = document.getElementById('tipo_gol');
    autor.value = "";
    minuto.value="";
    tipogol.value="";
    autor.focus();
   }

    
   const url = 'http://192.168.1.66/api/ultimopartido'
   const [lastmatchs, setLastMatch] = useState([]);

   const fetchMatchs= (url)=>{
       fetch(url)
       .then(response => response.json())
       .then(data=> setLastMatch(data))
       .catch(error=> console.log(error) )

   };
   useEffect(() =>{
       fetchMatchs(url);                
   },[]);

   let id_partido = lastmatchs.id;

    const create_gol = e =>{
        e.preventDefault();
 
         const data = {autor,minuto_juego,tipo_gol,id_partido};
         const requestOptions = {
             method: "PUT",
             headers: { 
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
              },
             body: JSON.stringify(data)
           };
 
           fetch("http://192.168.1.66/api/creargoles", requestOptions)
           .then(response => response.json())
           .then(res => console.log(res));
           limpiar();
                      
   };

   return(
        <div className='container' id='form_main'>
                <div>
                <input type="text" onChange={inputautor} value={autor} id='autor' className='form-control inputs' placeholder="Autor del Gol"/>
                </div>
                <div>
                <input type="text" onChange={inputminuto_juego} value={minuto_juego} id='minuto_juego' className='form-control inputs' placeholder="Minuto de Juego"/>
                </div>
                <div>
                <input type="text" onChange={inputtipo_gol} value={tipo_gol} id='tipo_gol' className='form-control inputs' placeholder="Tipo de Gol"/>
                </div>
                {
              
              <div>
                  <input className='form-control inputs'  type="text" id="id_partido" name="id_partido" value={lastmatchs.id} readOnly />
              </div>
       
                  }
                <div>
                <button type='submit' onClick={create_gol} className='btn btn-primary mb-4 '>Añadir Mas Goles</button>

                <button type='submit' onClick={create_gol} className='btn btn-primary mb-4 mx-3'>Terminar</button>


                </div>
        </div>

   );

}