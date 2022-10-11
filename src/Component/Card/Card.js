import './Card.css'
import React from 'react';
import '../../Assets/avatar-angela-gray.webp'


export default function Card({image,name,text,time,link}) {
  

  return (
        <div className='card'>
            <img alt='profile' src={image} />
            <div>
                <h1 className='notification-text'>{name} {text} {link}</h1>
                <h1 className='time'>{time}</h1>
            </div>
        </div>
    
  );
}


