import React, {useState, useEffect} from 'react'
import axios from "axios";

const IssLocation = () => {

    const [pos, setPos] = useState({})

    const getPos = () => {
      fetch('http://api.open-notify.org/iss-now.json')
            .then(res => res.json())
            .then(response => {
              setPos(response.iss_position);
            })
            .catch(error => console.log(error));
        };
      
    useEffect(() => {
        getPos()
    }, []);

  console.log(pos)
  return pos;
} 
export default IssLocation;
