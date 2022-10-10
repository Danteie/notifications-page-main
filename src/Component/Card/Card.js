import './Card.css'
import React from 'react';


export default function Card({text,time}) {
  

  return (
        <div className='card'>
            <img alt='profile'/>
            <div>
                <h1>{text}</h1>
                <h1>{time}</h1>
            </div>
        </div>
    
  );
}


