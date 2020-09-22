import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import {Line, Bar} from 'react-chartjs-2';
import './Chart.css';

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    }
    
    fetchData();
  }, []);

  // We are gonna have two different charts.One a bar chart for each specific country and another a line chart for the global daily cases.
  
  const lineChart = (
    dailyData.length !== 0 ? 
    <Line 
      data={{
        labels: dailyData.map(x => x.reportDate),
        datasets: [{
          data: dailyData.map(x => x.confirmed.total),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true
        },{
          data: dailyData.map(x => x.deaths.total),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }]
      }}
    /> : null
  );

  const barChart = (
    confirmed ?
    <Bar 
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'
          ],
          data: [confirmed.value, recovered.value, deaths.value]
        }]
      }}
      options={{
        legend: {display: false},
        title: {display: true, text: `Current state in ${country}`}
      }}
    /> : null
  );

  return (
    <div className="Chart">
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;