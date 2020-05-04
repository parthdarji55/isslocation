
import axios from 'axios'


export const fetchLocation = async () => {
  try {
    const {data}= await axios.get('http://api.open-notify.org/iss-now.json');
    console.log(data)
    return data
  } catch (error) {
    return error;
  }
};

export const fetchYourLocation = async () => {
  try {
    const {data}= await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR API KEY HERE')


    return data
  } catch (error) {
    return error;
  }
};
