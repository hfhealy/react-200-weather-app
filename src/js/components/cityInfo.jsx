import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props) {
		super(props);
	}
    
    render() {
        return (
<div className='col-12 col-md-6 mb-4'>
          <div className="card">
              <div className="card-header">
                City Information
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">San Diego</h5>
                <p className="card-text text-center">Lat/Long 32.7157° N, 117.1611° W</p>
                {/* <div className="col-sm-8" id="output-box"> */}
        <div id="box-border w-100">
        <div className="row w-100" id="change-headers">
            <div className="col-sm d-flex justify-content-center"><strong>Temperature(F)</strong></div>
            <div className="col-sm d-flex justify-content-center"><strong>Pressure</strong></div>
            <div className="col-sm d-flex justify-content-center"><strong>Humidity</strong></div>
            
        </div>
        <br/>
        <div className="row w-100">
          <p className="change col-sm d-flex justify-content-center" >70°F</p>
          <p className="change col-sm d-flex justify-content-center" >997</p>
          <p className="change col-sm d-flex justify-content-center" >39%</p>
          
        </div>
        </div>
        <br/>
        <div id="box-border w-100">
        <div className="row w-100" id="change-headers">
          <div className="col-sm d-flex justify-content-center"><strong>Lowest Temp</strong></div>
          <div className="col-sm d-flex justify-content-center"><strong>Highest Temp</strong></div>
          <div className="col-sm d-flex justify-content-center"><strong>Wind Speed</strong></div>
          
        </div>
        <br/> 
        <div className="row w-100">
          <p className="change col-sm d-flex justify-content-center">60°F</p>
          <p className="change col-sm d-flex justify-content-center">80°F</p>
          <p className="change col-sm d-flex justify-content-center">10mph</p>
          
        </div>
        </div>
      {/* </div> */}
              </div>
          </div>
          </div>
        )}
}