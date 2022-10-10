import './App.css'
import Cards from '../src/Component/Cards'


function App() {
  return (
    <main className="App">
        <div className='countainer'>
          <header>
            <div>
              <h1>Notification</h1>
              <h1 className='number'>3</h1>
            </div>
            <h2 className='mark'>Mark all as read</h2>
          </header>
          <Cards />
        </div>
    </main>
  );
}

export default App;
