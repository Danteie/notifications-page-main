import notifications from '../Component/Notificatins/Notifications';
import Card from '../Component/Card/Card'
import React from 'react';


const Cards = () => {
    return(
        <div>
            {
                notifications.map((notifications, i)=>{
                    return(
                        <Card text={notifications.text} time={notifications.time}/>
                    )
                })
            }
        </div>
    )


}

export default Cards;
  




