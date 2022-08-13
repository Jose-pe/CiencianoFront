import React from 'react';
import '../css/creatematch.css';

export function CreateMatch(){

    return(
        <div className='container' id='form_main'>
           
            <div>
            <input type="text" className='form-control inputs' placeholder="Rival"/>
            </div>
            <div>
            <input type="text" className='form-control inputs' placeholder="Marcador"/>
            </div>
            
        </div>
    );
}