import React, { Component } from 'react';
import './styles.css';
import ForeCastItem from './ForeCastItem';
import transformForecast from '../services/transformForeCast';
import CircularProgress from '@material-ui/core/CircularProgress';

import { api_endpoint_forecast, api_key } from '../constants/api_url';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${api_endpoint_forecast}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            res => res.json()).then(
                data => {
                    const forecastData = transformForecast(data);
                    this.setState({ forecastData });
                });
    }

    componentDidMount() {
      this.updateCity(this.props.city);
    }

    renderForeCastItemDays(forecastData) {
        return forecastData.map(forecast => {
            const { weekDay, hour, data } = forecast;
            return <ForeCastItem
            key={`${weekDay}${hour}`} 
            weekDay={weekDay} hour={hour} data={data} />;
        });
    }

    renderProgress() {
        return <div className="forecastext-progress" ><CircularProgress /></div>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        console.log(console.log('Rendering ... foreCastExtended'));

        return (
            <div>
                <h1 className="forecast-title" >Pronóstico extendido para: {city}</h1>
                {forecastData ?
                    this.renderForeCastItemDays(forecastData)
                    : this.renderProgress()}
            </div>
        );
    }

}

export default ForecastExtended;