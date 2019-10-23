import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForeCastExtended from './../componentes/ForecastExtended';

class ForeCastExtendedContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
    };

    render() {
        return (
            this.props.city &&
          <ForeCastExtended city={this.props.city} />
        )
    }
}

const mapToStateProps = state => ({city : state.city});

export default connect(mapToStateProps,null)(ForeCastExtendedContainer);