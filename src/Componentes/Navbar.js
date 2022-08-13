import React from 'react';
import '../css/navbar.css';
import {
   
    Link
  } from 'react-router-dom';
function Navbar(){

    return(
        <div className='navbarra'>
            <div className='row align-items-end'>
                <div className='logo-container col-6 text-center mt-2 mb-2'>
                     <img className='logo' src={require('../img/logo192.png')} alt="Cienciano Stats" />   
                </div>    
                <div className='links-container col-6'>
                    <div className='row'>
                        <div className='col-9 text-end mb-2'>
                        <Link to={'/'} className='navlink'>Home</Link>
                        <a className='navlink'>Partidos</a>                        
                        <Link  to={'/estadisticas'} className='navlink'>Estadisticas</Link>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );

}
export default Navbar;