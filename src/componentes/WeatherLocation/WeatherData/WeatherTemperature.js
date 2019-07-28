import React from 'react';
import PropTypes from 'prop-types';
import lluvioso from '../../../lluvioso.png';
import soleado from '../../../soleado.png';
import {
    RAINY,
    SUNNY
} from '../../../constants/weathers';
import './styles.css';

const icons = {
    [RAINY] : lluvioso,
    [SUNNY] : soleado
};

 
const getWeatherIcon = weatherState => {
    var icon = icons[weatherState];
    if(!icon){
        icon = icons[SUNNY];
    }
    return <img class="wicon" src={icon} width="48px" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
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