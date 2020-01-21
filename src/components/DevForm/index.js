import React, {useState, useEffect} from 'react';

function DevForm(onSubmit){
    
    const [github_username, setGithub_username]  = useState('');
    const [techs, setTechs]  = useState('');
    const [latitude, setLatitude]  = useState('');
    const [longitude, setLongitude]  = useState('');


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err)=>{
            console.log(err);
          },
          {
            // ctrl + space shows extra options
            timeout: 30000,
          }
          );
        //empty array means it will be executed
        //only once
      }, []);

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude, 
            longitude
          });

        setGithub_username('');
        setTechs('');
    }

    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Github User</label>
            <input 
              required 
              name="github_username" 
              id="github_username"
              value={github_username}
              onChange= {e => setGithub_username(e.target.value)}
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              required 
              name="techs" 
              id="techs"
              value={techs}
              onChange= {e => setTechs(e.target.value)}
            ></input>
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                required
                type="number" 
                name="latitude" 
                id="latitude" 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>

                
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                required 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude}
                onChange = {e => setLongitude(e.target.value)}
              ></input>
            </div>
          </div>
        <button type="submit" >Salvar</button>
        </form> 
    );
}

export default DevForm;