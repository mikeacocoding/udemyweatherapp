import React from 'react';
import './styles.css';
import ForeCastItem from './ForeCastItem';
import CircularProgress from '@material-ui/core/CircularProgress';


const renderForeCastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForeCastItem
        key={`${forecast.weekDay}${forecast.hour}`} 
        weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} />
    ));
}

const renderProgress = () => {
    return <div className="forecastext-progress" ><CircularProgress /></div>;
}

const ForecastExtended = ({city,forecastData}) => (
    <div>
        <h1 className="forecast-title" >Pronóstico extendido para: {city}</h1>
            {forecastData ?
                renderForeCastItemDays(forecastData) : 
                renderProgress()}
    </div>
);

export default ForecastExtended;