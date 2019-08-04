import React from 'react';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities,onSelectedLocation }) => {

    const handleWeatherLocationClick =city=>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }

    return <div className="locationList">
        {
            cities.map(city => 
                <WeatherLocation
                     key={city}
                     city={city}
                     onWeatherLocationClick={()=>handleWeatherLocationClick(city)} />)
        }
    </div>;
};

export default LocationList;