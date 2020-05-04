import Retlocation from './retlocation'
import GoogleMapReact from 'google-map-react'
import React, { useState, useEffect } from 'react';
import {fetchLocation} from './api';
import {fetchYourLocation} from './api';
import YourLocation from './yourLocation'
import FindDistance from './findDistance'
import './App.css'
import Map from './Map'

const img = <img src = "./iss.svg" alt = "iss" height = "30px"/>
const SpaceStation = ({ img }) => <div>{img}</div>

function App() {
const [city, setCity] = useState("bridgewater");
const [state, setState] = useState("NJ");
const [lat, setLat] = useState();
const [long, setLong] = useState();
const [dist, setDist] = useState();

let [issLat, issLong] = Retlocation() //rename IssLocation()



function fn1(){
    setCity(document.getElementById("text1").value)
    setState(document.getElementById("text2").value)

}
useEffect (() => {
   [issLat, issLong] = Retlocation()
    console.log(city, state);
YourLocation(city,state)
    .then(data => {
    setLat(data [0])
    setLong(data [1])
    setDist( FindDistance(issLat,issLong,lat,long))
    })
  })
let issPosition = [issLat,issLong]
//"AIzaSyCsyCYLsjzvO3Y2xTx5d0C-MVo6VadKMt8"
  return (
    <div>
      <p>iss latitude:{issLat}</p>
      <p>iss longitude:{issLong}</p>
      <input id ="text1" type="text" placeholder= "Enter Your City"/>
      <input id ="text2" type="text" placeholder= "Enter your State"/>

      <button onClick = {fn1} id = "btn1">Enter</button>
      <h2>{city}, {state} latitude is :{lat} and longitude is{long}</h2>
      <h3>The distance between the iss and your location is {dist} miles</h3>
      <Map/>
   </div>

  );
}
export default App;
