import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
    };

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            });
        });
    };

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city} />
            {data ?
                <WeatherData data={data} />:
                <CircularProgress/>
                }
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>;
    };
};

export default WeatherLocation;