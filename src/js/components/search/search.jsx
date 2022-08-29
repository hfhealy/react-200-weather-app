import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
		super(props);
	}
    
    render() {
        return (
<div>
<button type="button" className="btn btn-primary">San Diego</button>
<button type="button" className="btn btn-primary">New York</button>
<button type="button" className="btn btn-primary">Washington D.C.</button>
<button type="button" className="btn btn-primary">London</button>
<button type="button" className="btn btn-primary">Tokyo</button>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="City" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Go!</button>
  </div>
</div>
)}
}