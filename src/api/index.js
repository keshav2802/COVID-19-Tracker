import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


// function to fetch total data
const fetchData = async () => {
  try {
    const {data} = await axios.get(url);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    }
    return modifiedData;
    
  } catch(error) {

  }
}

// function to fetch daily data
const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${url}/daily`);
    return data;
  } catch (error) {
    
  }
}

export {fetchData, fetchDailyData};

// The fetchData is an asynchronous function. We are gonna use the most modern way to make it asynchronous.i.e, the async-await method. It deals with promises in the same way that the fetch('url').then(data, callback).catch(err, callback) method deals with, but async-await method is much easier to read and write. We use a try-catch block inside of this method.