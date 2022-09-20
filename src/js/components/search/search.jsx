import React from 'react';

import {
  updateSearch,
  getWeather
} from './searchActions';

export default class Search extends React.Component {
    constructor(props) {
		super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

  handleSearchInput(event) {

    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(updateSearch(value));
  }

  handleClick() {
    console.log("hello")
    const { dispatch, city } = this.props;
    dispatch(getWeather(city))
    console.log("27", this.props.city, city)
  }
    
    render() {
      // const { city } = this.props;
      // console.log("32", city.cityData)
        return (
<div>
<button type="button" className="btn btn-primary">San Diego</button>
<button type="button" className="btn btn-primary">New York</button>
<button type="button" className="btn btn-primary">Washington D.C.</button>
<button type="button" className="btn btn-primary">London</button>
<button type="button" className="btn btn-primary">Tokyo</button>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="City" value={ this.props.city } onChange={ this.handleSearchInput }/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={ () => this.handleClick() }>Go!</button>
  </div>
</div>
)}
}