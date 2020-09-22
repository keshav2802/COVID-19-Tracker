import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch(error) {
    
  }
}

export {fetchData};

// The fetchData is an asynchronous function. We are gonna use the most modern way to make it asynchronous.i.e, the async-await method. It deals with promises in the same way that the fetch('url').then(data, callback).catch(err, callback) method deals with, but async-await method is much easier to read and write. We use a try-catch block inside of this method.