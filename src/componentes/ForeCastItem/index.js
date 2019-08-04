import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';

const ForeCastItem = ({ weekDay, hour, data }) => (
    <div>
        <div>
            <h2>{weekDay} - {hour} hs</h2>
        </div>
        <WeatherData data={data} />
    </div>
);

export default ForeCastItem;