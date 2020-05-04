import axios from 'axios';
import { useState, useEffect } from 'react';
import {fetchLocation} from './api';


async function YourLocation(locationCity, locationState) {

//    const [lat, setLat] = useState();
//    const [long, setLong] = useState();

//  useEffect(() => {
let lat = 0 
let long =0
  let userLocateUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+locationCity+',+'+locationState+'&key=AIzaSyClQcgN2fo0yeOSsYlZjSyBmegXkCZu_ww'
  let data = await(
    await fetch(userLocateUrl)
  ).json();
  lat = (data.results[0].geometry.location.lat);
  long = (data.results[0].geometry.location.lng);




//    axios
//      .get('https://maps.googleapis.com/maps/api/geocode/json?address='+locationCity+',+'+locationState+'&key=AIzaSyClQcgN2fo0yeOSsYlZjSyBmegXkCZu_ww')
//      .then(({ data }) => {
//        setLat(data.results[0].geometry.location.lat);
//        setLong(data.results[0].geometry.location.lng);
//      });
//  }, []);

  return (
 [lat, long]
  );
}
export default YourLocation;