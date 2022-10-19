import './App.css'
import Cards from '../src/Component/Cards'
import notifications from './Component/Notificatins/Notifications';
import { useState } from 'react';

function App() {

  // rerender state
  const [value, setValue] = useState(0); 
   
  

  // Notification counter
  function notificationCounter(notifications){
    let number = 0
    for (let index = 0; index < notifications.length; index++) {
      if (!notifications[index].read) {
        number++
      }
    }
    return number
  }

  //Mark all as read
  function markAll(notifications){
    for (let index = 0; index < notifications.length; index++) {
      if (!notifications[index].read) {
        notifications[index].read = true
      }
    }
    // use to rerender commponent
    setValue(value => value + 1);
  }



  return (
    <main className="App">
        <div className='countainer'>
          <header>
            <div>
              <h1>Notification</h1>
              <h1 className='number'>{notificationCounter(notifications)}</h1>
            </div>
            <button className='mark' onClick={() => markAll(notifications)}>Mark all as read</button>
          </header>
          <Cards />
        </div>
    </main>
  );
}

export default App;
