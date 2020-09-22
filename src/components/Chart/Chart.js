import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import {Line, Bar} from 'react-chartjs-2';
import './Chart.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    }
    
    fetchData();
  });

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
  )

  return (
    <div className="Chart">
      {lineChart}
    </div>
  )
}

export default Chart;