import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions';
import LocationList from './../componentes/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);