import axios from 'axios';


//import React, { useState, useEffect } from 'react';
import {fetchLocation} from './api';
function Retlocation() {
  //  const [lat, setLat] = useState();
  //  const [long, setLong] = useState();

  // useEffect(() => {
  //   axios
  //     .get('http://api.open-notify.org/iss-now.json')
  //     .then(({ data }) => {
  //       setLat(data.iss_position.latitude);
  //       setLong(data.iss_position.longitude);
  //     });
  // }, []);
let lat = 0
let long = 0
  axios
      .get('http://api.open-notify.org/iss-now.json')
      .then(({ data }) => {
        lat = (data.iss_position.latitude);
        long = (data.iss_position.longitude);
      });
  return (
 [lat, long]
  );
}
export default Retlocation;