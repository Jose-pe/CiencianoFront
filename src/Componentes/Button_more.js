import React from 'react';
import '../css/buttonmore.css';

function Button_more({renewMatch}){
    return(
        <div className='col-12'>
              
              <a className='btn btn-danger btn-lg' onClick={renewMatch}>Más Partidos</a>
                 
        </div>
    );
}
export default Button_more;