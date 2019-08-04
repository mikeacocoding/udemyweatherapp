import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import './styles.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

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
        console.log('Actualizado');
    }

    handleUpdateClick = () => {

        this.setState({ data: null });

        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);

            setTimeout(() => {
                this.setState({
                    data: newWeather,
                });
            }, 1000);
        });
    };

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return <Card className="card">
            <CardActionArea>
                <CardContent>
                    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                        <Location city={city} />
                        {data ?
                            <WeatherData data={data} /> :
                            <CircularProgress className="progress" />
                        }
                        <Button className="boton" variant="contained" color="primary" onClick={this.handleUpdateClick}>
                            Actualizar
                    </Button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>;
    };
};

export default WeatherLocation;