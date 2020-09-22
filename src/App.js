import React, {Component} from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import './App.css';
import {fetchData} from './api/index';
import covidImage from './images/covid.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data: data});
  }

  handleCountryChange = async (country) => {
    const oneCountryData = await fetchData(country);
    this.setState({data: oneCountryData, country: country});
  }

  render() {
    const {data, country} = this.state;

    return (
      <div className="App">
        <img className="img" src={covidImage} alt="covid pic"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;

// The best place to fetch asynchronous data in of a class based component is inside of a componentDidMount lifecycle method.