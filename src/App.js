import React, {useState, useEffect} from 'react';
import './App.css';
import YourLocation from './YourLocation'
import IssLocation from './IssLocation'
import FindDistance from './FindDistance'
export default function App() {
  const [dist, setDist] = useState('')
  const [city, setCity] = useState('bridgewater')
  const [state, setState] = useState('NJ')

  const fn1 = () => {
    setCity(document.getElementById("text1").value);
    setState(document.getElementById("text2").value);
    

  }
useEffect(() => {
  setDist(FindDistance(latitude,longitude,lat,lng))
  console.log(dist,city, state, latitude, longitude,lat,lng) // problem here in getting the distance 
})

let {lat, lng} = YourLocation(city, state)

let {longitude, latitude} = IssLocation() 

  return (
    <div>
      <p>iss latitude:{latitude}</p>
      <p>iss longitude:{longitude}</p>
      <input id="text1" type="text" placeholder="Enter Your City" />
      <input id="text2" type="text" placeholder="Enter your State" />

      <button onClick={fn1} id="btn1">
        Enter
      </button>
      <h2>
        {city}, {state} latitude is :{lat} and longitude is{lng}
      </h2>
      <h3>The distance between the iss and your location is {dist} miles</h3>
    </div>
  );
}


