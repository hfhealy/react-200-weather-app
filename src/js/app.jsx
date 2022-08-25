import React from 'react';

import CityInfo from './components/cityInfo';
import SearchHistory from './components/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
      <h1 className='display-3 text-center'>Weather App</h1>
      <button type="button" className="btn btn-primary">San Diego</button>
      <button type="button" className="btn btn-primary">New York</button>
      <button type="button" className="btn btn-primary">Washington D.C.</button>
      <button type="button" className="btn btn-primary">London</button>
      <button type="button" className="btn btn-primary">Tokyo</button>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="City" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Go!</button>
        </div>
        <div className='row'>
        <CityInfo />
        <SearchHistory />
        </div>
        
      </div>

    );
  }
}
