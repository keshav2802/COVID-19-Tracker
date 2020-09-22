import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import './CountryPicker.css';
import {fetchCountries} from '../../api/index';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchData();
  }, [fetchedCountries]);

  return (
    <FormControl className="CountryPicker">
      <NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;