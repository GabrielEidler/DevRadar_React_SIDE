import React, {useState, useEffect} from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';
import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';




function App() {
  
  //creating states
  const [devs, setDevs] = useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  // e as event
  async function handleAddDev(data){

    const response = await api.post('devs', data);


    setDevs([...devs, response.data]);
  }


  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

     
      <main>
        <ul>
          {/* for each dev, do this: */}
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
          
        </ul>
      </main>
    </div>
  );
   
}

export default App;
