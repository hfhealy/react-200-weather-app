import React from 'react';

export default class CityInfo extends React.Component {
    
    render() {
      const {name, coord:{lat, lon}, main:{temp, pressure, humidity, temp_min, temp_max}, wind:{speed}, weather: {0: {main, icon}} } = this.props.cityData;
      
      return (
      

<div className='col-12 col-md-6 mb-4'>
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center">
{name == "" ? <span></span> :

    <div className="card weather-box border-0 shadow">
      <div className="card-body p-4">
        <div className="d-flex">
          <h3 className="flex-grow-1 text-center mt-3 mb-0">{name}</h3>
          
        </div>

        <div className="d-flex flex-column text-center mt-3 mb-4">
          <h6 className="display-4 mb-0 font-weight-bold">{`${parseInt(temp)}°`}</h6>
          <span className="small">{main}</span>
        </div>

        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <div className="ms-1">Wind: {speed}</div>
            <div className="ms-1">Pressure: {pressure}
            </div>
            <div className="ms-1">Humidity: {humidity}
            </div>
            <div className="ms-1">Min Temp: {temp_min}
            </div>
            <div className="ms-1">Max Temp: {temp_max}
            </div>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width="125px" />
          </div>
        </div>

      </div>
    </div>
      }
</div>
</div>
</div>
//<p className="text-center">{`Lat/Long: ${lat} ${lon}`}</p>
        // <div className='col-12 col-md-6 mb-4'>
        //   <div className="card">
        //       <div className="card-header">
        //         City Information                
        //       </div>
        //       <div className="card-body">
        //         <h5 className="card-title d-flex justify-content-center">{name}</h5>
        //         <p className="card-text text-center">{`Lat/Long: ${lat} ${lon}`}</p>
        // <div className="row w-100" id="change-headers">
        //     <div className="col-sm d-flex justify-content-center">
        //     <div className="card border-0">
        //     <label className="fw-bold">Temperature(F)</label>
        //     <p className="change d-flex justify-content-center">{temp}</p>
        //     </div>
        //     </div>
        //     <div className="col-sm d-flex justify-content-center">
        //     <div className="card border-0">
        //     <label className="fw-bold">Pressure</label>
        //     <p className="change d-flex justify-content-center">{pressure}</p>
        //     </div>
        //     </div>
        //     <div className="col-sm d-flex justify-content-center">
        //     <div className="card border-0">
        //     <label className="fw-bold">Humidity</label>
        //     <p className="change d-flex justify-content-center">{humidity}</p>
        //     </div>
        //     </div>
        // </div>
        // <br/>
        
        // <div className="row w-100" id="change-headers">
        //   <div className="col-sm d-flex justify-content-center"><strong>Lowest Temp</strong></div>
        //   <div className="col-sm d-flex justify-content-center"><strong>Highest Temp</strong></div>
        //   <div className="col-sm d-flex justify-content-center"><strong>Wind Speed</strong></div>
          
        // </div>
        // <br/> 
        // <div className="row w-100">
        //   <p className="change col-sm d-flex justify-content-center">{temp_min}</p>
        //   <p className="change col-sm d-flex justify-content-center">{temp_max}</p>
        //   <p className="change col-sm d-flex justify-content-center">{speed}</p>
          
        // </div>
        
      
        //       </div>
        //   </div>
        //   </div>
        )}
}