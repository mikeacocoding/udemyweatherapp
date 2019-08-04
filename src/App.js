import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './componentes/LocationList';
import ForecastExtended from './componentes/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Washington,us',
  'Ciudad de méxico,mx',
  'Madrid,es',
  'Lima,pe'
];

class App extends Component {

  constructor() {
    super();
    this.state = { city: null }
  }

  handleSelectedLocation = city => {
    this.setState({ city });
  };

  render() {

    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position='sticky' title="Test">
              <Toolbar>
                <Typography variant='subtitle1' color='inherit' >
                  Weather App
              </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city &&
                  <ForecastExtended city={city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}



export default App;
