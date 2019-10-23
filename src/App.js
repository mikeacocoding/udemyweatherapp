import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForeCastExtendedContainer from './containers/ForeCastExtendedContainer';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Washington,us',
  'Ciudad de méxico,mx',
  'Madrid,es',
  'Lima,pe'
];

class App extends Component {

  render() {
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
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                  <ForeCastExtendedContainer/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;

