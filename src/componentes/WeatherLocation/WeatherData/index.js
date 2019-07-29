import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css'; 

const WeatherData = ({data : { temperature, weatherState , humidity, wind, icon}})=>(
  <div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState} icon={icon}/>        
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
};

export default WeatherData;