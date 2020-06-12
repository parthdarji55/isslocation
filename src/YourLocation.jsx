import axios from "axios";
import { useState, useEffect } from "react";

function YourLocation(locationCity, locationState) {
  const [pos, setPos] = useState({});

  let userLocateUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationCity + ",+" + locationState + "&key=AIzaSyClQcgN2fo0yeOSsYlZjSyBmegXkCZu_ww";

  const getPos = (locationCity, locationState) => {
    fetch(userLocateUrl)
      .then((res) => res.json())
      .then((response) => {
        setPos(response.results[0].geometry.location);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPos();
  }, [locationCity]);

  console.log(pos, locationCity);

  return pos;
}
export default YourLocation;
