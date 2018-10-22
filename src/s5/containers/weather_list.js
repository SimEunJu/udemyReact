import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '..components/chart';

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);

class weatherList extends Component {
  renderWeather(data){
    const name = data.city.name;
    let temps = [];
    let pressures = [];
    let humidities = [];
    data.list.map(w => {
      temps.push(w.main.temp);
      pressures.push(w.main.pressure);
      humidities.push(w.main.humidity);
    });

    return (
      <tr key={name}>
        <td><Chart data={temps} unit="k" color="red" /> </td>
        <td><Chart data={pressures} unit="hPa" color="blue" /> </td>
        <td><Chart data={humidities} unit="%" color="green" /> </td>
      </tr>
    );
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}
