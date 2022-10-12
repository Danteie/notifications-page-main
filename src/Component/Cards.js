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
                        message={notifications.message}/>
                    )
                })
            }
        </div>
    )


}

export default Cards;
  




