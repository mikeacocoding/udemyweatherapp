import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForeCastExtended from './../componentes/ForecastExtended';
import { getCity,getForecastDataFromCities } from '../reducers';

class ForeCastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            city &&
          <ForeCastExtended city={city} forecastData={forecastData} />
        )
    }
}

const mapToStateProps = state => ({city : getCity(state), forecastData : getForecastDataFromCities(state)});

export default connect(mapToStateProps,null)(ForeCastExtendedContainer);