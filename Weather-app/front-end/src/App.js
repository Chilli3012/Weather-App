import Search from './components/Search/Search';
import './App.css';
import Weather from './components/Weather/Weather';
import { Weather_API_URL,Weather_API_ID } from './api';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DashBoard from './components/DashBoard/DashBoard'
import ForeCast from './components/ForeCast/ForeCast';


function App() {



  const[currentWeather,setWeather]=useState(null);
  const[foreCast,setForeCast]=useState(null);

  const handleOnSearchChange=(searchData)=>{
    const [lat,long]=searchData.value.split(" ");

    const weatherFetch=fetch(`${Weather_API_URL}/weather?lat=${lat}&lon=${long}&appid=${Weather_API_ID}&units=metric`);

    const foreCastFetch=fetch(`${Weather_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${Weather_API_ID}&units=metric`);



    Promise.all([weatherFetch,foreCastFetch])
      .then(async(response)=>{
        const weatherFetchResponse = await response[0].json();//this one will fetch weather api
        const foreCastFetchResponse = await response[1].json();// this one will fetch forecast api
        setWeather({city:searchData.label, ...weatherFetchResponse});
        setForeCast({city: searchData.label, ...foreCastFetchResponse});
      })
      .catch((err)=>console.log(err));



  }


  return (
    <div className="container">
      <div className='search-bar'>
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard/>}>
            <Route path='/' element={currentWeather && <Weather data={currentWeather}/>}/>
            <Route path='/forecast' element={<><ForeCast data={foreCast}/></>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
