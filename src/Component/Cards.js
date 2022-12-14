import notifications from '../Component/Notificatins/Notifications';
import Card from '../Component/Card/Card'
import React from 'react';


const Cards = () => {
    return(
        <div>
            {
                notifications.map((notifications, i)=>{
                  
                    return(
                        <Card 
                        image={notifications.image} 
                        name={notifications.name} 
                        text={notifications.text} 
                        time={notifications.time} 
                        link={notifications.link}
                        content={notifications.content}
                        message={notifications.message}
                        read={notifications.read}/>
                    )
                })
            }
        </div>
    )


}

export default Cards;
  




