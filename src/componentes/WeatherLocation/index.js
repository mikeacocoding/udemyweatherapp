import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import './styles.css';

import {
    RAINY,
    SUNNY
} from '../../constants/weathers';
import { runInThisContext } from 'vm';

const data = {
    temperature: 2,
    weatherState: SUNNY,
    humidity: 20,
    wind: '20 m/s'
}

const data2 = {
    temperature: 5,
    weatherState: RAINY,
    humidity: 10,
    wind: '10 m/s'
}


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city : 'Colombia',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log('Actualizado');
        this.setState({
            data : data2,
        });

    };

    render() {

        const{ city,data} = this.state;

        return <div className="weatherLocationCont">
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>;
    }
};

export default WeatherLocation;