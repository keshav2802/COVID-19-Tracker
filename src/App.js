import React, {Component} from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import './App.css';
import {fetchData} from './api/index';

class App extends Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  
  render() {
    return (
      <div className="App">
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;

// The best place to fetch asynchronous data in of a class based component is inside of a componentDidMount lifecycle method.