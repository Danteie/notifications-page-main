import './Card.css'
import React from 'react';
import '../../Assets/avatar-angela-gray.webp'


export default function Card({image,name,text,time,link,message,content,read}) {
  
  function messages(message) {
    if (message) {
      return (<h2 className='message'>{message}</h2>)
    }
  }

  function images(content) {
    if (content) {
      return (<img className='content' src={content}/>)
    }
  }

  function isRead(read){
    if(!read){
      return (
        <div className='card'>
            <img alt='profile' src={image} />
            <div>
                <h1 className='notification-read'><span className='nickname'>{name}</span> <span className='type-notification'>{text}</span> <span className='link'>{link}</span></h1>
                <h1 className='time'>{time}</h1>
                {messages(message)}
            </div>
           {images(content)}
        </div>
      )
    }else{
      return(
        <div className='card'>
            <img alt='profile' src={image} />
            <div>
                <h1 className='notification-notRead'><span className='nickname'>{name}</span> <span className='type-notification'>{text}</span> <span className='link'>{link}</span></h1>
                <h1 className='time'>{time}</h1>
                {messages(message)}
            </div>
           {images(content)}
        </div>
      )
    }
  }


  return (
    <>
      {isRead(read)}  
    </>
  );
}


