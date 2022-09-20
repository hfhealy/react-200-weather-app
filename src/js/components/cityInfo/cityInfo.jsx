import React from 'react';

export default class CityInfo extends React.Component {
  //   constructor(props) {
	// 	super(props);
	// }
    
    render() {
      const {name, coord:{lat, lon}, main:{temp, pressure, humidity, temp_min, temp_max}, wind:{speed} } = this.props.cityData;
      return (
        <div className='col-12 col-md-6 mb-4'>
          <div className="card">
              <div className="card-header">
                City Information                
              </div>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{name}</h5>
                <p className="card-text text-center">{`Lat/Long: ${lat} ${lon}`}</p>
                {/* <div className="col-sm-8" id="output-box"> */}
        <div id="box-border w-100">
        <div className="row w-100" id="change-headers">
            <div className="col-sm d-flex justify-content-center"><strong>Temperature(F)</strong></div>
            <div className="col-sm d-flex justify-content-center"><strong>Pressure</strong></div>
            <div className="col-sm d-flex justify-content-center"><strong>Humidity</strong></div>
            
        </div>
        <br/>
        <div className="row w-100">
          <p className="change col-sm d-flex justify-content-center" >{temp}</p>
          <p className="change col-sm d-flex justify-content-center" >{pressure}</p>
          <p className="change col-sm d-flex justify-content-center" >{humidity}</p>
          
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
          <p className="change col-sm d-flex justify-content-center">{temp_min}</p>
          <p className="change col-sm d-flex justify-content-center">{temp_max}</p>
          <p className="change col-sm d-flex justify-content-center">{speed}</p>
          
        </div>
        </div>
      {/* </div> */}
              </div>
          </div>
          </div>
        )}
}