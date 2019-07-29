import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const getIcon = icon=>{
    const icon_endpoint = "http://openweathermap.org/img/wn/";
    return `${icon_endpoint}${icon}.png`;
}

const WeatherTemperature = ({ temperature, icon }) => (
    <div className="weatherTemperatureCont">
        <img alt="" className="wicon" src={getIcon(icon)} width="70px" />
        <span className="temperature">
            {`${temperature}`}
        </span>
        <span className="temperatureType">
            {` C°`}
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number,
    weatherState : PropTypes.string
}

export default WeatherTemperature;