import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../css/creatematch.css';

export function CreateMatch(){

   const [rival, setRival] = useState([]);
   const [marcador, setMarcador] = useState([]);
   const [fecha, setFecha] = useState([]); 
   const [hora, setHora] = useState([]);
   const [goles_favor, setGoles_favor] = useState([]);
   const [goles_encontra, setGoles_encontra] = useState([]);
   const [tiros, setTiros] = useState([]);
   const [tiros_arco, setTiros_arco] = useState([]);
   const [posesion_balon , setPosesion_balon] = useState([]);
   const [pases, setPases]= useState([]);
   const [faltas, setFaltas] = useState([]);
   const [tarjeta_amarilla, setTarjeta_amarilla] = useState([]);
   const[tarjeta_roja, setTarjeta_roja] = useState([]);
   const[fuera_juego, setFuera_juego] = useState([]);
   const[tiro_esquina, setTiro_esquina] = useState([]);
   const[resultado, setResultado] = useState('');
   const[competencia, setCompetencia] = useState('');
   const[condicion, setCondicion]= useState('');

   const inputrival = e => setRival(e.target.value);
   const inputmarcador = e => setMarcador(e.target.value);
   const inputfecha = e => setFecha(e.target.value);
   const inputhora = e => setHora(e.target.value);
   const inputgolesfavor = e => setGoles_favor(e.target.value);
   const inputgolescontra = e => setGoles_encontra(e.target.value);
   const inputtiros = e => setTiros(e.target.value);
   const inputtiros_arco = e => setTiros_arco(e.target.value);
   const inputposesion_balon = e => setPosesion_balon(e.target.value);
   const inputpases = e => setPases(e.target.value);
   const inputfaltas = e => setFaltas(e.target.value);
   const inputtarjetaamarilla = e => setTarjeta_amarilla(e.target.value);
   const inputtarjetaroja = e => setTarjeta_roja(e.target.value);
   const inputfuerajuego = e => setFuera_juego(e.target.value);
   const inputtiroesquina = e => setTiro_esquina(e.target.value);
   const inputresultado = e => setResultado(e.target.value);
   const inputcompetencia = e => setCompetencia(e.target.value);
   const inputcondicion = e => setCondicion(e.target.value);
   
   const navigate = useNavigate() 

   const create_match = e =>{
       e.preventDefault();

        const data = {rival, marcador, fecha, competencia , hora, goles_favor, goles_encontra, tiros, tiros_arco, posesion_balon, pases, faltas, tarjeta_amarilla, tarjeta_roja, fuera_juego, tiro_esquina, resultado, condicion};
        const requestOptions = {
            method: "POST",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            body: JSON.stringify(data)
          };

          fetch("http://192.168.1.66/api/partidos", requestOptions)
          .then(response => response.json())
          .then(res => console.log(res));
          if (goles_favor !== '0') {
                navigate('/addgol');  
          }
          else{
                navigate('/');
          }
          
  };

  return(
        <div className='container' id='form_main'>
           
            <div>
            <input type="text" onChange={inputrival} value={rival} id='rival' className='form-control inputs' placeholder="Rival"/>
            </div>
            <div>
            <input type="text" onChange={inputmarcador} value={marcador} className='form-control inputs' placeholder="Marcador"/>
            </div>
            <div>

            <select className='form-select inputs' onChange={inputcompetencia} value={competencia} >
                <option selected>competencia</option>
                <option value="Liga 1">Liga 1</option>
                <option value="Liga 2">Liga 2</option>
                <option value="Copa Sudamericana">Sudamericana</option>
                <option value="Copa Libertadores">Libertadores</option>
                
            </select>
            </div>
            <div>
            <input type="date" onChange={inputfecha} value={fecha} className='form-control inputs' placeholder="Fecha"/>
            </div>
            <div>
            <input type="time" onChange={inputhora} value={hora} className='form-control inputs' placeholder="Hora"/>
            </div>
            <div>
            <input type="number" onChange={inputgolesfavor} value={goles_favor} className='form-control inputs' placeholder="Goles a favor"/>
            </div>
            <div>
            <input type="number" onChange={inputgolescontra} value={goles_encontra} className='form-control inputs' placeholder="Goles en Contra"/>
            </div>
            <div>
            <input type="number" onChange={inputtiros} value={tiros} className='form-control inputs' placeholder="Tiros"/>
            </div>
            <div>
            <input type="number" onChange={inputtiros_arco} value={tiros_arco} className='form-control inputs' placeholder="Tiros al Arco"/>
            </div>
            <div>
            <input type="text" onChange={inputposesion_balon} value={posesion_balon} className='form-control inputs' placeholder="Posesion del Balon %"/>
            </div>
            <div>
            <input type="number" onChange={inputpases} value={pases} className='form-control inputs' placeholder="Numero de pases"/>
            </div>
            <div>
            <input type="number" onChange={inputfaltas} value={faltas} className='form-control inputs' placeholder="Faltas"/>
            </div>
            <div>
            <input type="number" onChange={inputtarjetaamarilla} value={tarjeta_amarilla} className='form-control inputs' placeholder="Tarjetas Amarillas"/>
            </div>
            <div>
            <input type="number" onChange={inputtarjetaroja} value={tarjeta_roja} className='form-control inputs' placeholder="Tarjetas Rojas"/>
            </div>
            <div>
            <input type="number" onChange={inputfuerajuego} value={fuera_juego} className='form-control inputs' placeholder="Fuera de Juego"/>
            </div>                
            <div>
            <input type="number" onChange={inputtiroesquina} value={tiro_esquina} className='form-control inputs' placeholder="Tiros de esquina"/>
            </div>
            <div>
            <select className='form-select inputs' onChange={inputresultado} value={resultado} >
                <option selected>Resultado</option>
                <option value="Victoria">Victoria</option>
                <option value="Derrota">Derrota</option>
                <option value="Empate">Empate</option>

            </select>
            </div>
            <div>
            <select className='form-select inputs' onChange={inputcondicion} value={condicion} >
                <option selected>Condicion</option>    
                <option value="Local">Local</option>
                <option value="Visitante">Visitante</option>
                <option value="Cancha Neutral">Cancha Neutral</option>

            </select>
            </div>
            <div>
                <button type='submit' onClick={create_match} className='btn btn-primary mb-4 '>Guardar</button>
            </div>                                    
        </div>
    );
}