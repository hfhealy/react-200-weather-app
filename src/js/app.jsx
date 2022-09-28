import React from 'react';

import Search from './components/search';
import CityInfo from './components/cityInfo';
import SearchHistory from './components/searchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
      <h1 className='display-3 text-center'>Weather App</h1>
        
          <Search />
        
        <div className='row'>
        <CityInfo />
        <SearchHistory />
        </div>
        
      </div>

    );
  }
}
