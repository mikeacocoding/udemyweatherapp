import React from 'react';
import './App.css';
import LocationList from './componentes/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Washington,us',
  'Ciudad de méxico,mx',
  'Madrid,es',
  'Lima,pe'
];

const handleSelectedLocation = city => {
  console.log(`handleSelectionLocation: ${city}`);
};

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}
        onSelectedLocation={handleSelectedLocation} />
    </div>
  );
}

export default App;
