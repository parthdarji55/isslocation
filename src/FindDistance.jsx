import React from 'react'
const FindDistance = (issLat, issLong, yourLocationLat, yourLocationLong) => {
    //mapping the function to get the radians of the coordinates
    [issLat,issLong,yourLocationLat,yourLocationLong] =[issLat,issLong,yourLocationLat,yourLocationLong].map(coordinate => parseInt(coordinate)/180*Math.PI)
    //3963 is the radius of the Earth in Miles
    let distance = 3963.0 * Math.acos(Math.sin(issLat)*Math.sin(yourLocationLat)+Math.cos(issLat)*Math.cos(yourLocationLat)*Math.cos(yourLocationLong-issLong))
 distance = Math.round(distance)
 console.log(distance, issLat, issLong, yourLocationLat, yourLocationLong)
  return distance
}
export default FindDistance;